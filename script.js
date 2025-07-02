document.addEventListener('DOMContentLoaded', async () => {
    // Función para obtener la descripción del plato
    const generateDescription = (item) => {
        return item.description || "Un clásico cubano lleno de sabor.";
    };

    // Función para generar el menú dinámicamente
    const createMenuSection = (menuData) => {
        const menuCategoriesContainer = document.getElementById('menu-categories');
        if (!menuCategoriesContainer) {
            console.error("El contenedor del menú 'menu-categories' no fue encontrado.");
            return;
        }
        menuCategoriesContainer.innerHTML = ''; // Limpiar contenido previo

        for (const category in menuData) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.innerHTML = `<h3>${category}</h3>`;
            const galleryDiv = document.createElement('div');
            galleryDiv.classList.add('gallery');
            menuData[category].forEach((item, index) => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-card');
                menuItemDiv.style.animationDelay = `${index * 0.1}s`;

                const imagePath = item.image ? `images/menu/${item.image}` : 'images/gallery/placeholder.jpg'; // Asumir un placeholder si no hay imagen
                const imageName = item.name || 'Plato'; // Nombre del plato para el alt de la imagen

                menuItemDiv.innerHTML = `
                    <img src="${imagePath}" alt="${imageName}" class="menu-image" onerror="this.src='images/gallery/placeholder.jpg'; this.alt='Imagen no disponible';">
                    <h4>${item.name}</h4>
                    <p>${item.price ? item.price.toFixed(2) + ' CUP' : 'Precio no disponible'}</p>
                    <span class="tooltip">${generateDescription(item)}</span>
                `;
                galleryDiv.appendChild(menuItemDiv);
            });
            categoryDiv.appendChild(galleryDiv);
            menuCategoriesContainer.appendChild(categoryDiv);
        }

        // Toggle para expandir/contraer categorías
        const categoryTitles = document.querySelectorAll('.category h3');
        categoryTitles.forEach(title => {
            title.addEventListener('click', () => {
                const category = title.parentElement;
                category.classList.toggle('expanded');
                const cards = category.querySelectorAll('.menu-card');
                cards.forEach((card, index) => {
                    card.style.animation = 'none';
                    card.offsetHeight; // Trigger reflow
                    card.style.animation = null;
                    card.style.animationDelay = `${index * 0.1}s`;
                });
            });
        });
    };

    // --- Cargar datos del menú desde menu.json ---
    let fetchedMenuData = {};
    try {
        const response = await fetch('menu.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        fetchedMenuData = await response.json();
        createMenuSection(fetchedMenuData); // Generar sección de menú con datos de JSON
    } catch (error) {
        console.error("No se pudieron cargar los datos del menú desde menu.json:", error);
        // Opcional: Cargar datos de respaldo o mostrar un mensaje de error en la UI
        const menuCategoriesContainer = document.getElementById('menu-categories');
        if (menuCategoriesContainer) {
            menuCategoriesContainer.innerHTML = "<p style='color:red; text-align:center;'>Error al cargar el menú. Intente más tarde.</p>";
        }
    }

    // Animaciones al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    // Scroll suave con offset para el header fijo
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.main-header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de encabezado al hacer scroll
    const header = document.querySelector('.main-header');
    if (header) { // Verificar si el header existe
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Año dinámico en el footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) { // Verificar si el span del año existe
      currentYearSpan.textContent = new Date().getFullYear();
    }


    // Lógica para el modal de ubicación
    const locationBtn = document.getElementById('location-btn');
    const locationModal = document.getElementById('location-modal');
    const closeModalBtn = document.getElementById('close-modal'); // Renombrado para claridad

    if (locationBtn && locationModal && closeModalBtn) { // Verificar si todos los elementos del modal existen
        locationBtn.addEventListener('click', () => {
            locationModal.classList.add('show');
        });

        closeModalBtn.addEventListener('click', () => {
            locationModal.classList.remove('show');
        });

        locationModal.addEventListener('click', (e) => {
            if (e.target === locationModal) {
                locationModal.classList.remove('show');
            }
        });
    }

    // --- Lógica del Carrusel Generalizada ---
    function inicializarCarrusel(carouselId, carouselDataAttribute, imagePathPrefix, itemsData, getItemHtml) {
        const carouselElement = document.getElementById(carouselId);
        // Seleccionar el contenedor de dots específico usando el atributo data
        const dotsContainerElement = document.querySelector(`.carousel-dots[data-carousel-dots="${carouselDataAttribute}"]`);
        // Seleccionar botones específicos usando el atributo data
        const prevBtnElement = document.querySelector(`.carousel-prev[data-carousel="${carouselDataAttribute}"]`);
        const nextBtnElement = document.querySelector(`.carousel-next[data-carousel="${carouselDataAttribute}"]`);

        if (!carouselElement || !dotsContainerElement || !prevBtnElement || !nextBtnElement) {
            // Silencioso si no se encuentran elementos, para no romper si una galería no está presente.
            // console.warn(`Elementos del carrusel no encontrados para ${carouselId} con atributo ${carouselDataAttribute}. Este carrusel no se inicializará.`);
            return;
        }

        let currentIndex = 0;
        const intervalTime = 8000; // Cambia cada 8 segundos
        let autoSlide;

        // Generar items del carrusel
        const generarItems = () => {
            carouselElement.innerHTML = ''; // Limpiar items existentes
            dotsContainerElement.innerHTML = ''; // Limpiar dots existentes

            if (!itemsData || itemsData.length === 0) {
                carouselElement.innerHTML = '<p style="text-align:center; padding: 20px; color: #666;">Próximamente nuevas imágenes...</p>';
                prevBtnElement.style.display = 'none';
                nextBtnElement.style.display = 'none';
                dotsContainerElement.style.display = 'none';
                return;
            }

            itemsData.forEach((item, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                carouselItem.innerHTML = getItemHtml(item, imagePathPrefix);
                carouselElement.appendChild(carouselItem);

                // Crear indicador (dot)
                const dot = document.createElement('span');
                dot.classList.add('carousel-dot');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainerElement.appendChild(dot);
            });
            // Mostrar botones si hay items
            prevBtnElement.style.display = 'block';
            nextBtnElement.style.display = 'block';
            dotsContainerElement.style.display = 'block'; // Asegurar que los dots se muestren
        };

        const actualizarDots = () => {
            const dots = dotsContainerElement.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
        };

        const goToSlide = (index) => {
            const items = carouselElement.querySelectorAll('.carousel-item');
            if (items.length === 0) return;
            currentIndex = (index + items.length) % items.length; // Asegurar que el índice sea válido
            actualizarCarrusel();
        };

        const actualizarCarrusel = () => {
            const items = carouselElement.querySelectorAll('.carousel-item');
            if (items.length === 0) return;
            const offset = -currentIndex * 100;
            carouselElement.style.transform = `translateX(${offset}%)`;
            actualizarDots();
        };

        const iniciarAutoSlide = () => {
            detenerAutoSlide(); // Asegurarse de que no haya múltiples intervalos
            const items = carouselElement.querySelectorAll('.carousel-item');
            if (items.length <= 1) return; // No iniciar auto-slide si hay 1 o menos imágenes
            autoSlide = setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                actualizarCarrusel();
            }, intervalTime);
        };

        const detenerAutoSlide = () => clearInterval(autoSlide);

        // Inicializar
        generarItems(); // Genera los items y los dots
        const items = carouselElement.querySelectorAll('.carousel-item'); // Re-seleccionar items después de generarlos

        if (items.length > 0) { // Solo añadir listeners y empezar autoslide si hay items
            prevBtnElement.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
                detenerAutoSlide();
                iniciarAutoSlide(); // Reiniciar con el nuevo estado
            });

            nextBtnElement.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
                detenerAutoSlide();
                iniciarAutoSlide(); // Reiniciar con el nuevo estado
            });

            carouselElement.addEventListener('mouseenter', detenerAutoSlide);
            carouselElement.addEventListener('mouseleave', iniciarAutoSlide);

            actualizarCarrusel(); // Llamada inicial para mostrar el primer slide y dots
            iniciarAutoSlide();
        }
    }

    // --- Datos e Inicialización para el Carrusel de Galería (Platos) ---
    // Esta sección ahora dependerá de fetchedMenuData
    const initializeGalleryCarousel = (menuDataParam) => {
        const galeriaItems = [];
        if (typeof menuDataParam === 'object' && menuDataParam !== null) {
            for (const category in menuDataParam) {
                if (Array.isArray(menuDataParam[category])) {
                    menuDataParam[category].forEach(item => {
                        if (item && typeof item.name === 'string' && typeof item.description === 'string' && item.image) {
                            // Solo incluir items que tengan una propiedad 'image' definida en menu.json
                            galeriaItems.push({
                                name: item.name,
                                description: item.description,
                                imageName: item.image // Usar directamente el valor de item.image
                            });
                        }
                    });
                }
            }
        }

        function getGaleriaItemHtml(item, imagePathPrefix) {
            // imagePathPrefix será 'images/gallery/' como se define en la llamada a inicializarCarrusel
            // item.imageName es el nombre del archivo (ej: "mi_plato.jpg")
            const imageSrc = `${imagePathPrefix}${item.imageName}`;
            const desc = item.description ? item.description.split('.')[0] : 'Delicioso plato';

            return `
                <img src="${imageSrc}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 50px;\\'>Imagen no disponible (${item.imageName})</p>'">
                <div class="carousel-caption">${item.name} - ${desc}</div>
            `;
        }
        // Usar 'images/gallery/' como imagePathPrefix para este carrusel.
        inicializarCarrusel('carousel', 'galeria', 'images/gallery/', galeriaItems, getGaleriaItemHtml);
    };

    // Llamar a la inicialización del carrusel de galería DESPUÉS de cargar los datos del menú
    if (Object.keys(fetchedMenuData).length > 0) {
        initializeGalleryCarousel(fetchedMenuData);
    } else {
        // Si fetch falló, intenta inicializar con datos vacíos o un placeholder
        // Esto previene errores si fetchedMenuData no se carga.
        // El carrusel mostrará "Próximamente nuevas imágenes..." como está definido en inicializarCarrusel.
        initializeGalleryCarousel({});
    }

    // --- Datos e Inicialización para el Carrusel "Nuestros Recuerdos" ---
    // Lista ampliada de imágenes de la carpeta 'images/nueva_galeria_recuerdos/'
    // Se mantienen los nombres de archivo originales debido a problemas con la herramienta rename_file.
    const nuestrosRecuerdosItems = [
        { name: "Recuerdo 1", description: "Momento especial", imageName: "WhatsApp Image 2025-06-22 at 6.18.15 PM.jpeg" },
        { name: "Recuerdo 2", description: "Celebración", imageName: "WhatsApp Image 2025-06-22 at 6.18.19 PM.jpeg" },
        { name: "Recuerdo 3", description: "Equipo", imageName: "WhatsApp Image 2025-06-22 at 6.18.23 PM.jpeg" },
        { name: "Recuerdo 4", description: "Ambiente", imageName: "WhatsApp Image 2025-06-22 at 6.18.24 PM (1).jpeg" },
        { name: "Recuerdo 5", description: "Detalle", imageName: "WhatsApp Image 2025-06-22 at 6.18.24 PM (2).jpeg" },
        { name: "Recuerdo 6", description: "Sonrisas", imageName: "WhatsApp Image 2025-06-22 at 6.18.24 PM.jpeg" },
        { name: "Recuerdo 7", description: "Rincón acogedor", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM (1).jpeg" },
        { name: "Recuerdo 8", description: "Brindis", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM (2).jpeg" },
        { name: "Recuerdo 9", description: "Plato estrella", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM (3).jpeg" },
        { name: "Recuerdo 10", description: "Noche mágica", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM.jpeg" },
        { name: "Recuerdo 11", description: "Pasión por la cocina", imageName: "WhatsApp Image 2025-06-22 at 6.18.26 PM (1).jpeg" },
        { name: "Recuerdo 12", description: "Tradición", imageName: "WhatsApp Image 2025-06-22 at 6.18.26 PM (2).jpeg" },
        { name: "Recuerdo 13", description: "Sabor cubano", imageName: "WhatsApp Image 2025-06-22 at 6.18.26 PM.jpeg" },
        { name: "Recuerdo 14", description: "Encuentro", imageName: "WhatsApp Image 2025-06-22 at 6.18.27 PM (1).jpeg" },
        { name: "Recuerdo 15", description: "Alegría", imageName: "WhatsApp Image 2025-06-22 at 6.18.27 PM (2).jpeg" },
        { name: "Recuerdo 16", description: "Recuerdo inolvidable", imageName: "WhatsApp Image 2025-06-22 at 6.18.29 PM (1).jpeg" },
        { name: "Recuerdo 17", description: "Desde la cocina", imageName: "WhatsApp Image 2025-06-22 at 6.18.29 PM.jpeg" },
        { name: "Recuerdo 18", description: "Arte culinario", imageName: "WhatsApp Image 2025-06-22 at 6.18.30 PM (1).jpeg" },
        { name: "Recuerdo 19", description: "Nuestro espacio", imageName: "WhatsApp Image 2025-06-22 at 6.18.30 PM (2).jpeg" },
        { name: "Recuerdo 20", description: "Con cariño", imageName: "WhatsApp Image 2025-06-22 at 6.18.30 PM.jpeg" },
        { name: "Recuerdo 21", description: "Sazón único", imageName: "WhatsApp Image 2025-06-22 at 6.18.31 PM (1).jpeg" },
        { name: "Recuerdo 22", description: "Risas compartidas", imageName: "WhatsApp Image 2025-06-22 at 6.18.31 PM (2).jpeg" },
        { name: "Recuerdo 23", description: "Buen provecho", imageName: "WhatsApp Image 2025-06-22 at 6.18.31 PM.jpeg" },
        { name: "Recuerdo 24", description: "Instantes", imageName: "WhatsApp Image 2025-06-22 at 6.18.32 PM (1).jpeg" },
        { name: "Recuerdo 25", description: "Felicidad", imageName: "WhatsApp Image 2025-06-22 at 6.18.32 PM.jpeg" },
        { name: "Recuerdo 26", description: "Delicias", imageName: "WhatsApp Image 2025-06-22 at 6.18.33 PM.jpeg" },
        { name: "Recuerdo 27", description: "Atardecer", imageName: "WhatsApp Image 2025-06-22 at 6.19.44 PM.jpeg" },
        { name: "Recuerdo 28", description: "Rincón especial", imageName: "WhatsApp Image 2025-06-22 at 6.19.46 PM (1).jpeg" },
        { name: "Recuerdo 29", description: "Nuestra gente", imageName: "WhatsApp Image 2025-06-22 at 6.19.46 PM (2).jpeg" },
        { name: "Recuerdo 30", description: "Siempre bienvenidos", imageName: "WhatsApp Image 2025-06-22 at 6.19.46 PM.jpeg" }
        // Se han añadido 30 imágenes. Idealmente, se deberían añadir las 151.
        // Los nombres de archivo pueden contener caracteres que necesiten ser codificados por el navegador.
    ];

    function getRecuerdosItemHtml(item, imagePathPrefix) {
        const desc = item.description || 'Un momento especial';
        return `
            <img src="${imagePathPrefix}${item.imageName}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 50px;\\'>Imagen no disponible</p>'">
            <div class="carousel-caption">${item.name} - ${desc}</div>
        `;
    }

    // El prefijo de la ruta de la imagen será 'images/nueva_galeria_recuerdos/'
    inicializarCarrusel('carousel-recuerdos', 'recuerdos', 'images/nueva_galeria_recuerdos/', nuestrosRecuerdosItems, getRecuerdosItemHtml);

});

document.addEventListener('DOMContentLoaded', () => {
    // Datos del menú incrustados con descripciones detalladas
    const menuData = {
    "Entrantes": [
        {"name": "Entrante de Jamón y Queso", "price": 480.00, "description": "Dados de Jamón y Queso."},
        {"name": "Huevitos de Codorniz", "price": 1000.00, "description": "Huevitos de Codorniz."},
        {"name": "Cóctel de Camarones", "price": 1300.00, "description": "Camarones frescos salteados con mayonesa y piña."},
        {"name": "Tostón Relleno", "price": 920.00, "description": "Tostones crujientes rellenos con jamón, mayonesa y queso gratinado."},
        {"name": "Bolitas de Queso", "price": 800.00, "description": "Bolitas de queso acompañadas con salsa agridulce."},
        {"name": "Croquetas de Jamón", "price": 600.00, "description": "Croquetas caseras de jamón, cremosas por dentro y crujientes por fuera, servidas con salsa."}
    ],
    "Sopas": [
        {"name": "Sopa de Vegetales", "price": 500.00, "description": "Caldo ligero de vegetales frescos, con zanahoria y calabacín , sazonado con hierbas aromáticas."},
        {"name": "Sopa de Pollo", "price": 600.00, "description": "Sopa reconfortante elaborada con fondo de pollo y condimentada con un sabor casero."}
    ],
    "Cremas": [
        {"name": "Crema Aurora", "price": 600.00, "description": "Crema suave de tomate y salsa bechamel."},
        {"name": "Crema de Queso", "price": 750.00, "description": "Crema rica de queso gouda, servida con salsa bechamel."},
        {"name": "Crema Virginia", "price": 800.00, "description": "Crema bechamel con jamón salteado."},
        {"name": "Crema Mixta", "price": 950.00, "description": "Fondo napolitano con crema bechamel, jamón y queso gratinado."}
    ],
    "Platos Principales": [
        {"name": "Lonjas de Pierna Ahumada", "price": 1300.00, "description": "Lonjas de cerdo ahumado, asadas a la perfección."},
        {"name": "Tesoro del Mar", "price": 3200.00, "description": "Selección de mariscos frescos, incluyendo cangrejo, camarones y pescado."},
        {"name": "Brochetas Marineras", "price": 3100.00, "description": "Brochetas de camarones y pescado, asadas con pimientos y cebolla, acompañadas de salsa."},
        {"name": "Mar y Tierra", "price": 5900.00, "description": "Combinación de cerdo, res, cordero, camarón y pescado sazonado con vegetales y jugo de limón."},
        {"name": "Fricase de Cerdo", "price": 2450.00, "description": "Cerdo guisado en una salsa criolla con tomate, acompañado de arroz blanco."},
        {"name": "Bistec de Cerdo grille", "price": 2100.00, "description": "Bistec de cerdo a la parrilla, marinado con mojo cubano."},
        {"name": "Chuletas de Cerdo natural", "price": 2140.00, "description": "Chuletas de cerdo jugosas, asadas con hierbas frescas y marinado con mojito cubano."},
        {"name": "Lonjas de Cerdo en Salsa Criolla", "price": 2200.00, "description": "Lonjas de cerdo en una salsa criolla de tomate, cebolla y pimientos, con un toque de comino."},
        {"name": "Costilla de Cerdo asada", "price": 2800.00, "description": "Costillas de cerdo asadas lentamente, glaseadas con una salsa barbacoa."},
        {"name": "Lomo de Cerdo ahumado grille", "price": 2100.00, "description": "Lomo de cerdo ahumado y asado, servido con una salsa y vegetales al vapor."},
        {"name": "Bistec de Cerdo empanado", "price": 2150.00, "description": "Bistec de cerdo empanado y frito."},
        {"name": "Fajita de Cerdo con vegetales", "price": 2200.00, "description": "Tiras de cerdo salteadas con pimientos, cebolla y especias."},
        {"name": "Escalope de Cerdo al queso", "price": 2250.00, "description": "Escalope de cerdo cubierto con queso fundido, en una salsa de tomate."},
        {"name": "Rollos de Cerdo grille", "price": 2500.00, "description": "Rollos de cerdo rellenos de jamón y queso, asados a la parrilla y servidos con salsa de piña."},
        {"name": "Brochetas de Cerdo con vegetales", "price": 2300.00, "description": "Cerdo troceado, con vegetales, cebolla y piña aderezado con salsa napolitana."},
        {"name": "Masa de Cerdo frita", "price": 2500.00, "description": "Trozos de cerdo fritos hasta quedar crujientes, servidos con abundante cebolla."},
        {"name": "Uruguayo de Cerdo", "price": 3000.00, "description": "Bistec de cerdo relleno con jamón y queso empanado y frito."},
        {"name": "Bistec de Pollo leonesa", "price": 1660.00, "description": "Bistec de pollo a la plancha con cebolla."},
        {"name": "Lonjas de Pollo en salsa Tropical", "price": 1730.00, "description": "Lonjas de pollo en una salsa de tomate agridulce con piña."},
        {"name": "Bistec de Pollo empanado", "price": 1800.00, "description": "Bistec de pollo empanado y frito."},
        {"name": "Pollo Frito", "price": 1860.00, "description": "Pollo frito al estilo cubano, crujiente por fuera y jugoso por dentro, con un toque de mojito."},
        {"name": "Fajitas de Pollo con Vegetales", "price": 1750.00, "description": "Bistec de pollo en cortes a la juliana salteado a la plancha con vegetales."},
        {"name": "Brochetas de Pollo con Vegetales", "price": 1750.00, "description": "Trozos de pollo con pimiento, cebolla y aderezado con mojito cubano."},
        {"name": "Pollo Delicias Cubanas", "price": 2200.00, "description": "Bistec de pollo a la plancha con salsa de vegetales y frutas, jamón, crema bechamel y queso gratinado al estilo de la casa."},
        {"name": "Pollo Guisado", "price": 1920.00, "description": "Pollo troceado con salsa criolla y malanga."},
        {"name": "Pollo Gordon Blue", "price": 2800.00, "description": "Bistec de pollo relleno con queso, jamón empanado y frito."},
        {"name": "Pollo a la Barbacoa", "price": 1800.00, "description": "Pollo en salsa de soja y mantequilla elaborado a fuego lento hasta 45 minutos."}
    ]
    };

    // Función para obtener la descripción del plato
    const generateDescription = (item) => {
        return item.description || "Un clásico cubano lleno de sabor.";
    };

    // Generar el menú dinámicamente
    const menuCategoriesContainer = document.getElementById('menu-categories');
    if (menuCategoriesContainer) { // Verificar si el contenedor del menú existe
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
                menuItemDiv.innerHTML = `
                    <h4>${item.name}</h4>
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
    const galeriaItems = [];
    if (typeof menuData === 'object' && menuData !== null) { // Verificar que menuData existe y es un objeto
        for (const category in menuData) {
            if (Array.isArray(menuData[category])) { // Verificar que cada categoría es un array
                menuData[category].forEach(item => {
                    if (item && typeof item.name === 'string' && typeof item.description === 'string') { // Chequeos básicos de datos
                        galeriaItems.push({
                            name: item.name,
                            description: item.description,
                            imageName: item.name.toLowerCase().replace(/ /g, '_') + '.jpg'
                        });
                    }
                });
            }
        }
    }


    function getGaleriaItemHtml(item, imagePathPrefix) {
        const desc = item.description ? item.description.split('.')[0] : 'Delicioso plato';
        return `
            <img src="${imagePathPrefix}${item.imageName}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 50px;\\'>Imagen no disponible</p>'">
            <div class="carousel-caption">${item.name} - ${desc}</div>
        `;
    }

    inicializarCarrusel('carousel', 'galeria', 'images/gallery/', galeriaItems, getGaleriaItemHtml);

    // --- Datos e Inicialización para el Carrusel "Nuestros Recuerdos" ---
    // Imágenes reales de la carpeta 'images/nueva_galeria_recuerdos/'
    const nuestrosRecuerdosItems = [
        { name: "Recuerdo 1", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.15 PM.jpeg" },
        { name: "Recuerdo 2", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.19 PM.jpeg" },
        { name: "Recuerdo 3", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.23 PM.jpeg" },
        { name: "Recuerdo 4", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.24 PM (1).jpeg" },
        { name: "Recuerdo 5", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.24 PM (2).jpeg" },
        { name: "Recuerdo 6", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.24 PM.jpeg" },
        { name: "Recuerdo 7", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM (1).jpeg" },
        { name: "Recuerdo 8", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM (2).jpeg" },
        { name: "Recuerdo 9", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM (3).jpeg" },
        { name: "Recuerdo 10", description: "", imageName: "WhatsApp Image 2025-06-22 at 6.18.25 PM.jpeg" },
        // ...agrega el resto de imágenes siguiendo el mismo formato...
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

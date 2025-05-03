document.addEventListener('DOMContentLoaded', () => {
    // Datos del menú incrustados con descripciones detalladas
    const menuData = {
        "Entrantes": [
            {"name": "Entrante de Jamón y Queso", "price": 480.00, "description": "Lonjas de jamón serrano y queso manchego fundido, servidas con pan tostado y un toque de aceite de oliva."},
            {"name": "Huevitos de Codorniz", "price": 1000.00, "description": "Huevos de codorniz fritos, presentados sobre una cama de ensalada fresca con un aderezo de limón y hierbas."},
            {"name": "Cóctel de Camarones", "price": 1300.00, "description": "Camarones frescos cocidos, servidos fríos con una salsa de cóctel clásica y un toque de aguacate."},
            {"name": "Cóctel de Atún", "price": 1300.00, "description": "Atún fresco en trozos, mezclado con cebolla, tomate y un aderezo cítrico, servido con galletas saladas."},
            {"name": "Tostón Relleno", "price": 920.00, "description": "Tostones crujientes rellenos de picadillo de cerdo sazonado con especias cubanas y un toque de mojo."},
            {"name": "Bolitas de Queso", "price": 800.00, "description": "Bolitas de queso cheddar empanizadas y fritas, acompañadas de una salsa de miel y mostaza."},
            {"name": "Croquetas de Jamón", "price": 600.00, "description": "Croquetas caseras de jamón, cremosas por dentro y crujientes por fuera, servidas con salsa alioli."}
        ],
        "Sopas": [
            {"name": "Sopa de Cebolla", "price": 700.00, "description": "Sopa tradicional de cebolla caramelizada, gratinada con queso fundido y un crostón de pan."},
            {"name": "Sopa de Vegetales", "price": 500.00, "description": "Caldo ligero de vegetales frescos, con zanahoria, calabacín y apio, sazonado con hierbas aromáticas."},
            {"name": "Sopa de Pollo", "price": 600.00, "description": "Sopa reconfortante de pollo con fideos, zanahoria y un toque de culantro para un sabor casero."}
        ],
        "Cremas": [
            {"name": "Crema Aurora", "price": 600.00, "description": "Crema suave de tomate y pimientos rojos, con un toque de crema fresca y albahaca."},
            {"name": "Crema de Queso", "price": 750.00, "description": "Crema rica de queso cheddar y gouda, servida con crujientes trozos de pan tostado."},
            {"name": "Crema Virginia", "price": 800.00, "description": "Crema de calabaza y jengibre, con un toque de nuez moscada y un chorrito de crema agria."},
            {"name": "Crema Mixta", "price": 950.00, "description": "Mezcla de cremas de maíz y mariscos, con un toque de brandy para un sabor sofisticado."}
        ],
        "Platos Principales": [
            {"name": "Lonjas de Pierna Ahumada", "price": 1300.00, "description": "Lonjas de cerdo ahumado, asadas a la perfección y servidas con salsa de tamarindo."},
            {"name": "Tesoro del Mar", "price": 3200.00, "description": "Selección de mariscos frescos, incluyendo langosta y camarones, en una salsa de vino blanco y ajo."},
            {"name": "Brochetas Marineras", "price": 3100.00, "description": "Brochetas de camarones y pescado, asadas con pimientos y cebolla, acompañadas de salsa de limón."},
            {"name": "Mar y Tierra", "price": 5900.00, "description": "Combinación de filete mignon y langosta a la parrilla, servida con mantequilla de ajo y vegetales salteados."},
            {"name": "Fricase de Cerdo", "price": 2450.00, "description": "Cerdo guisado en una salsa criolla con tomate, pimientos y aceitunas, acompañado de arroz blanco."},
            {"name": "Bistec de Cerdo grille", "price": 2100.00, "description": "Bistec de cerdo a la parrilla, marinado con mojo cubano y servido con plátanos maduros fritos."},
            {"name": "Chuletas de Cerdo natural", "price": 2140.00, "description": "Chuletas de cerdo jugosas, asadas con hierbas frescas y acompañadas de puré de boniato."},
            {"name": "Lonjas de Cerdo en Salsa Criolla", "price": 2200.00, "description": "Lonjas de cerdo en una salsa criolla de tomate, cebolla y pimientos, con un toque de comino."},
            {"name": "Costilla de Cerdo asada", "price": 2800.00, "description": "Costillas de cerdo asadas lentamente, glaseadas con una salsa barbacoa de guayaba."},
            {"name": "Lomo de Cerdo ahumado grille", "price": 2100.00, "description": "Lomo de cerdo ahumado y asado, servido con una salsa de mostaza y miel, y vegetales al vapor."},
            {"name": "Bistec de Cerdo empanado", "price": 2150.00, "description": "Bistec de cerdo empanado y frito, acompañado de una ensalada fresca y salsa tártara."},
            {"name": "Fajita de Cerdo con vegetales", "price": 2200.00, "description": "Tiras de cerdo salteadas con pimientos, cebolla y especias, servidas con tortillas calientes."},
            {"name": "Escalope de Cerdo al queso", "price": 2250.00, "description": "Escalope de cerdo cubierto con queso fundido, en una salsa de tomate y albahaca."},
            {"name": "Rollos de Cerdo grille", "price": 2500.00, "description": "Rollos de cerdo rellenos de jamón y queso, asados a la parrilla y servidos con salsa de piña."},
            {"name": "Brochetas de Cerdo con vegetales", "price": 2300.00, "description": "Brochetas de cerdo con trozos de pimientos y cebolla, marinadas con mojo y asadas a la perfección."},
            {"name": "Masa de Cerdo frita", "price": 2500.00, "description": "Trozos de cerdo fritos hasta quedar crujientes, servidos con una salsa de ajo y limón."},
            {"name": "Uruguayo de Cerdo", "price": 3000.00, "description": "Bistec de cerdo a la uruguaya, cubierto con jamón, queso y salsa de tomate, gratinado al horno."},
            {"name": "Bistec de Pollo leonesa", "price": 1660.00, "description": "Pechuga de pollo a la plancha con salsa leonesa de cebolla, pimientos y un toque de vino blanco."},
            {"name": "Lonjas de Pollo en salsa Tropical", "price": 1730.00, "description": "Lonjas de pollo en una salsa de mango y piña, acompañadas de arroz con coco."},
            {"name": "Bistec de Pollo empanado", "price": 1800.00, "description": "Pechuga de pollo empanada y frita, servida con papas fritas y una ensalada de col."},
            {"name": "Pollo Frito", "price": 1860.00, "description": "Pollo frito al estilo cubano, crujiente por fuera y jugoso por dentro, con un toque de especias."},
            {"name": "Fajitas de Pollo con Vegetales", "price": 1750.00, "description": "Tiras de pollo salteadas con pimientos y cebolla, servidas con tortillas y salsa de aguacate."},
            {"name": "Brochetas de Pollo con Vegetales", "price": 1750.00, "description": "Brochetas de pollo marinadas con especias, asadas con pimientos y cebolla, y un toque de limón."},
            {"name": "Pollo Delicias Cubanas", "price": 2200.00, "description": "Pechuga de pollo rellena de jamón y queso, en una salsa de tomate y pimientos, al estilo de la casa."},
            {"name": "Pollo Guisado", "price": 1920.00, "description": "Pollo guisado con papas y zanahorias en una salsa criolla, servido con arroz blanco."},
            {"name": "Pollo Gordon Blue", "price": 2800.00, "description": "Pechuga de pollo rellena de jamón y queso suizo, empanada y frita, con una salsa de crema."},
            {"name": "Pollo a la Barbacoa", "price": 1800.00, "description": "Pollo asado con una salsa barbacoa de guayaba, acompañado de plátanos maduros fritos."}
        ]
    };

    // Función para obtener la descripción del plato
    const generateDescription = (item) => {
        return item.description || "Un clásico cubano lleno de sabor.";
    };

    // Generar el menú dinámicamente
    const menuCategoriesContainer = document.getElementById('menu-categories');
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
                <p>$${item.price.toFixed(2)}</p>
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
                card.offsetHeight;
                card.style.animation = null;
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });
    });

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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Año dinámico en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Lógica para el modal de ubicación
    const locationBtn = document.getElementById('location-btn');
    const locationModal = document.getElementById('location-modal');
    const closeModal = document.getElementById('close-modal');

    locationBtn.addEventListener('click', () => {
        locationModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        locationModal.classList.remove('show');
    });

    locationModal.addEventListener('click', (e) => {
        if (e.target === locationModal) {
            locationModal.classList.remove('show');
        }
    });

    // Lógica del carrusel con todos los platos
    const carousel = document.getElementById('carousel');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    const intervalTime = 8000; // Cambia cada 8 segundos
    let autoSlide;

    // Generar items del carrusel a partir de menuData
    const generateCarouselItems = () => {
        const allItems = [];
        for (const category in menuData) {
            menuData[category].forEach(item => {
                const itemName = item.name.toLowerCase().replace(/ /g, '_');
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                carouselItem.innerHTML = `
                    <img src="images/gallery/${itemName}.jpg" alt="${item.name}" loading="lazy">
                    <div class="carousel-caption">${item.name} - ${item.description.split('.')[0]}</div>
                `;
                allItems.push(carouselItem);
            });
        }
        allItems.forEach(item => carousel.appendChild(item));
    };

    // Crear indicadores (dots)
    const updateDots = () => {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    };

    const goToSlide = (index) => {
        currentIndex = index;
        updateCarousel();
    };

    const updateCarousel = () => {
        const items = document.querySelectorAll('.carousel-item');
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        updateDots();
    };

    const startAutoSlide = () => {
        autoSlide = setInterval(() => {
            const items = document.querySelectorAll('.carousel-item');
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, intervalTime);
    };

    const stopAutoSlide = () => clearInterval(autoSlide);

    // Inicializar carrusel
    generateCarouselItems();
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    items.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    prevBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('.carousel-item');
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
        stopAutoSlide();
        startAutoSlide();
    });

    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    updateCarousel();
    startAutoSlide();
});
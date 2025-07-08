document.addEventListener('DOMContentLoaded', async () => {
    const siteTranslations = {
        es: {
            page_title: "Delicias Cubanas - Restaurante",
            nav_home: "Inicio",
            nav_menu: "Menú",
            nav_gallery: "Galería",
            nav_memories: "Nuestros Recuerdos",
            nav_contact: "Contacto",
            main_header_title: "Delicias Cubanas",
            anniversary_title: "16 años de auténtica cubanía y respeto",
            anniversary_p1_html: "<p>En nuestro restaurante celebramos con orgullo 16 años dedicados a compartir la verdadera esencia de la cocina cubana. Desde nuestros inicios, nos hemos esforzado por mantener vivo el sabor de nuestra tierra.<br><br></p>",
            anniversary_p2_html: "<p>Creemos firmemente en la autenticidad: cada plato que servimos es una expresión genuina de la cultura cubana, preparado con el mismo amor y dedicación que en casa. Fomentamos el respeto y la hospitalidad como pilares fundamentales.<br><br></p>",
            anniversary_p3_html: "<p>La cubanía es nuestro sello: aquí no solo se viene a comer, sino a vivir una experiencia donde la música, la alegría y la calidez humana se sienten en cada rincón. ¡Gracias a quienes nos han acompañado en este viaje!</p>",
            hero_title: "Bienvenidos a Delicias Cubanas",
            hero_subtitle: "Disfruta de la auténtica comida cubana en un ambiente acogedor.",
            hero_location_button: "Ver Ubicación",
            menu_section_title: "Nuestro Menú",
            gallery_section_title: "Galería",
            gallery_prev_button: "❮",
            gallery_next_button: "❯",
            memories_section_title: "Nuestros Recuerdos",
            memories_prev_button: "❮",
            memories_next_button: "❯",
            contact_section_title: "Contáctanos",
            contact_email_label: "Email:",
            contact_phone_label: "Teléfono:",
            contact_address_label: "Dirección:",
            footer_rights: "Todos los derechos reservados.",
            location_modal_title: "Nuestra Ubicación",
            location_modal_text_prefix: "Estamos ubicados en",
            location_modal_gmaps_button: "Ver en Google Maps",
            price_not_available: "Precio no disponible", // Aunque ya no se usa en el menú, la mantenemos por si acaso
            image_not_available: "Imagen no disponible",
            default_plate_description: "Delicioso plato",

            "menu.category_Entrantes": "Entrantes",
            "menu.category_Sopas": "Sopas",
            "menu.category_Cremas": "Cremas",
            "menu.category_Platos_Principales": "Platos Principales",
            "menu.item_entrante_de_jamon_y_queso_name": "Entrante de Jamón y Queso",
            "menu.item_entrante_de_jamon_y_queso_description": "Dados de Jamón y Queso.",
            "menu.item_huevitos_de_codorniz_name": "Huevitos de Codorniz",
            "menu.item_huevitos_de_codorniz_description": "Huevitos de Codorniz.",
            "menu.item_coctel_de_camarones_name": "Cóctel de Camarones",
            "menu.item_coctel_de_camarones_description": "Camarones frescos salteados con mayonesa y piña.",
            "menu.item_toston_relleno_name": "Tostón Relleno",
            "menu.item_toston_relleno_description": "Tostones crujientes rellenos con jamón, mayonesa y queso gratinado.",
            "menu.item_bolitas_de_queso_name": "Bolitas de Queso",
            "menu.item_bolitas_de_queso_description": "Bolitas de queso acompañadas con salsa agridulce.",
            "menu.item_croquetas_de_jamon_name": "Croquetas de Jamón",
            "menu.item_croquetas_de_jamon_description": "Croquetas caseras de jamón, cremosas por dentro y crujientes por fuera, servidas con salsa.",
            "menu.item_sopa_de_vegetales_name": "Sopa de Vegetales",
            "menu.item_sopa_de_vegetales_description": "Caldo ligero de vegetales frescos, con zanahoria y calabacín, sazonado con hierbas aromáticas.",
            "menu.item_sopa_de_pollo_name": "Sopa de Pollo",
            "menu.item_sopa_de_pollo_description": "Sopa reconfortante elaborada con fondo de pollo y condimentada con un sabor casero.",
            "menu.item_crema_aurora_name": "Crema Aurora",
            "menu.item_crema_aurora_description": "Crema suave de tomate y salsa bechamel.",
            "menu.item_crema_de_queso_name": "Crema de Queso",
            "menu.item_crema_de_queso_description": "Crema rica de queso gouda, servida con salsa bechamel.",
            "menu.item_crema_virginia_name": "Crema Virginia",
            "menu.item_crema_virginia_description": "Crema bechamel con jamón salteado.",
            "menu.item_crema_mixta_name": "Crema Mixta",
            "menu.item_crema_mixta_description": "Fondo napolitano con crema bechamel, jamón y queso gratinado.",
            "menu.item_lonjas_de_pierna_ahumada_name": "Lonjas de Pierna Ahumada",
            "menu.item_lonjas_de_pierna_ahumada_description": "Lonjas de cerdo ahumado, asadas a la perfección.",
            "menu.item_tesoro_del_mar_name": "Tesoro del Mar",
            "menu.item_tesoro_del_mar_description": "Selección de mariscos frescos, incluyendo cangrejo, camarones y pescado.",
            "menu.item_brochetas_marineras_name": "Brochetas Marineras",
            "menu.item_brochetas_marineras_description": "Brochetas de camarones y pescado, asadas con pimientos y cebolla, acompañadas de salsa.",
            "menu.item_mar_y_tierra_name": "Mar y Tierra",
            "menu.item_mar_y_tierra_description": "Combinación de cerdo, res, cordero, camarón y pescado sazonado con vegetales y jugo de limón.",
            "menu.item_fricase_de_cerdo_name": "Fricase de Cerdo",
            "menu.item_fricase_de_cerdo_description": "Cerdo guisado en una salsa criolla con tomate, acompañado de arroz blanco.",
            "menu.item_bistec_de_cerdo_grille_name": "Bistec de Cerdo grille",
            "menu.item_bistec_de_cerdo_grille_description": "Bistec de cerdo a la parrilla, marinado con mojo cubano.",
            "menu.item_chuletas_de_cerdo_natural_name": "Chuletas de Cerdo natural",
            "menu.item_chuletas_de_cerdo_natural_description": "Chuletas de cerdo jugosas, asadas con hierbas frescas y marinado con mojito cubano.",
            "menu.item_lonjas_de_cerdo_en_salsa_criolla_name": "Lonjas de Cerdo en Salsa Criolla",
            "menu.item_lonjas_de_cerdo_en_salsa_criolla_description": "Lonjas de cerdo en una salsa criolla de tomate, cebolla y pimientos, con un toque de comino.",
            "menu.item_costilla_de_cerdo_asada_name": "Costilla de Cerdo asada",
            "menu.item_costilla_de_cerdo_asada_description": "Costillas de cerdo asadas lentamente, glaseadas con una salsa barbacoa.",
            "menu.item_lomo_de_cerdo_ahumado_grille_name": "Lomo de Cerdo ahumado grille",
            "menu.item_lomo_de_cerdo_ahumado_grille_description": "Lomo de cerdo ahumado y asado, servido con una salsa y vegetales al vapor.",
            "menu.item_bistec_de_cerdo_empanado_name": "Bistec de Cerdo empanado",
            "menu.item_bistec_de_cerdo_empanado_description": "Bistec de cerdo empanado y frito.",
            "menu.item_fajita_de_cerdo_con_vegetales_name": "Fajita de Cerdo con vegetales",
            "menu.item_fajita_de_cerdo_con_vegetales_description": "Tiras de cerdo salteadas con pimientos, cebolla y especias.",
            "menu.item_escalope_de_cerdo_al_queso_name": "Escalope de Cerdo al queso",
            "menu.item_escalope_de_cerdo_al_queso_description": "Escalope de cerdo cubierto con queso fundido, en una salsa de tomate.",
            "menu.item_rollos_de_cerdo_grille_name": "Rollos de Cerdo grille",
            "menu.item_rollos_de_cerdo_grille_description": "Rollos de cerdo rellenos de jamón y queso, asados a la parrilla y servidos con salsa de piña.",
            "menu.item_brochetas_de_cerdo_con_vegetales_name": "Brochetas de Cerdo con vegetales",
            "menu.item_brochetas_de_cerdo_con_vegetales_description": "Cerdo troceado, con vegetales,cebolla y piña aderezado con salsa napolitana.",
            "menu.item_masa_de_cerdo_frita_name": "Masa de Cerdo frita",
            "menu.item_masa_de_cerdo_frita_description": "Trozos de cerdo fritos hasta quedar crujientes, servidos con abundante cebolla.",
            "menu.item_uruguayo_de_cerdo_name": "Uruguayo de Cerdo",
            "menu.item_uruguayo_de_cerdo_description": "Bistec de cerdo relleno con jamón y queso empanado y frito.",
            "menu.item_bistec_de_pollo_leonesa_name": "Bistec de Pollo leonesa",
            "menu.item_bistec_de_pollo_leonesa_description": "Bistec de pollo a la plancha con cebolla.",
            "menu.item_lonjas_de_pollo_en_salsa_tropical_name": "Lonjas de Pollo en salsa Tropical",
            "menu.item_lonjas_de_pollo_en_salsa_tropical_description": "Lonjas de pollo en una salsa de tomate agridulce con piña.",
            "menu.item_bistec_de_pollo_empanado_name": "Bistec de Pollo empanado",
            "menu.item_bistec_de_pollo_empanado_description": "Bistec de pollo empanado y frito.",
            "menu.item_pollo_frito_name": "Pollo Frito",
            "menu.item_pollo_frito_description": "Pollo frito al estilo cubano, crujiente por fuera y jugoso por dentro, con un toque de mojito.",
            "menu.item_fajitas_de_pollo_con_vegetales_name": "Fajitas de Pollo con Vegetales",
            "menu.item_fajitas_de_pollo_con_vegetales_description": "Bistec de pollo en cortes a la juliana salteado a la plancha con vegetales.",
            "menu.item_brochetas_de_pollo_con_vegetales_name": "Brochetas de Pollo con Vegetales",
            "menu.item_brochetas_de_pollo_con_vegetales_description": "Trozos de pollo con pimiento, cebolla y aderezado con mojito cubano.",
            "menu.item_pollo_delicias_cubanas_name": "Pollo Delicias Cubanas",
            "menu.item_pollo_delicias_cubanas_description": "Bistec de pollo a la plancha con salsa de vegetales y frutas, jamón, crema bechamel y queso gratinado al estilo de la casa.",
            "menu.item_pollo_guisado_name": "Pollo Guisado",
            "menu.item_pollo_guisado_description": "Pollo troceado con salsa criolla y malanga.",
            "menu.item_pollo_gordon_blue_name": "Pollo Gordon Blue",
            "menu.item_pollo_gordon_blue_description": "Bistec de pollo relleno con queso, jamón empanado y frito.",
            "menu.item_pollo_a_la_barbacoa_name": "Pollo a la Barbacoa",
            "menu.item_pollo_a_la_barbacoa_description": "Pollo en salsa de soja y mantequilla elaborado a fuego lento hasta 45 minutos."
        },
        en: {
            page_title: "Delicias Cubanas - Restaurant",
            nav_home: "Home",
            nav_menu: "Menu",
            hero_title: "Welcome to Delicias Cubanas",
            anniversary_title: "16 years of authentic Cuban spirit and respect",
            anniversary_p1_html: "<p>In our restaurant, we proudly celebrate 16 years dedicated to sharing the true essence of Cuban cuisine. Since our beginnings, we have strived to keep the taste of our land alive.<br><br></p>",
            anniversary_p2_html: "<p>We firmly believe in authenticity: every dish we serve is a genuine expression of Cuban culture, prepared with the same love and dedication as at home. We promote respect and hospitality as fundamental pillars.<br><br></p>",
            anniversary_p3_html: "<p>Cuban identity is our hallmark: here, you don't just come to eat, but to live an experience where music, joy, and human warmth are felt in every corner. Thank you to those who have accompanied us on this journey!</p>",
            price_not_available: "Price not available",
            image_not_available: "Image not available",
            default_plate_description: "Delicious dish",
            "menu.category_Entrantes": "Appetizers",
            "menu.item_fricase_de_cerdo_name": "Pork Fricassee",
            "menu.item_fricase_de_cerdo_description": "Pork stewed in a Creole tomato sauce, served with white rice."
        },
        it: {
            page_title: "Delicias Cubanas - Ristorante",
            nav_home: "Inizio",
            nav_menu: "Menù",
            hero_title: "Benvenuti a Delicias Cubanas",
            anniversary_title: "16 anni di autentica cubanità e rispetto",
            anniversary_p1_html: "<p>Nel nostro ristorante celebriamo con orgoglio 16 anni dedicati a condividere la vera essenza della cucina cubana. Fin dai nostri inizi, ci siamo sforzati di mantenere vivo il sapore della nostra terra.<br><br></p>",
            anniversary_p2_html: "<p>Crediamo fermamente nell'autenticità: ogni piatto che serviamo è un'espressione genuina della cultura cubana, preparato con lo stesso amore e dedizione di casa. Promuoviamo il rispetto e l'ospitalità come pilastri fondamentali.<br><br></p>",
            anniversary_p3_html: "<p>La cubanità è il nostro sigillo: qui non si viene solo per mangiare, ma per vivere un'esperienza dove la musica, la gioia e il calore umano si sentono in ogni angolo. Grazie a coloro che ci hanno accompagnato in questo viaggio!</p>",
            price_not_available: "Prezzo non disponibile",
            image_not_available: "Immagine non disponibile",
            default_plate_description: "Piatto delizioso",
            "menu.category_Entrantes": "Antipasti",
            "menu.item_fricase_de_cerdo_name": "Fricassea di Maiale",
            "menu.item_fricase_de_cerdo_description": "Spezzatino di maiale in salsa creola di pomodoro, accompagnato da riso bianco."
        }
    };

    // --- INICIO LÓGICA DE ALERTAS TEMPORALES ---
    const alertMessages = [
        "Una pequeña propina es una gran forma de agradecer su dedicación.",
        "Nuestros meseros están capacitados para recomendarte lo mejor del menú.",
        "Pregunta a nuestro personal, ¡estamos aquí para ayudarte!",
        "Disfruta la autenticidad de nuestra comida criolla, hecha con amor.",
        "Tu generosidad ayuda a nuestro personal a seguir sonriendo.",
        "Cada bocado es una explosión de tradición y sazón."
    ];
         const alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert';

        const messageP = document.createElement('p');
        messageP.textContent = message;
        alertDiv.appendChild(messageP);

        const closeButton = document.createElement('span');
        closeButton.className = 'custom-alert-close';
        closeButton.innerHTML = '&times;';
        closeButton.setAttribute('role', 'button');
        closeButton.setAttribute('tabindex', '0');
        closeButton.setAttribute('aria-label', 'Cerrar alerta');
        closeButton.onclick = () => removeCurrentAlert(true);
        closeButton.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                removeCurrentAlert(true);
            }
        };
        alertDiv.appendChild(closeButton);

        document.body.appendChild(alertDiv);
        currentAlert = alertDiv;

        void currentAlert.offsetWidth;
        currentAlert.classList.add('alert-visible');

        if (alertTimeoutId) clearTimeout(alertTimeoutId);
        alertTimeoutId = setTimeout(() => removeCurrentAlert(false), alertDuration);
    }

    function displayRandomAlert() {
        if (alertMessages.length === 0) return;
        let randomIndex;
        if (alertMessages.length > 1) {
            do {
                randomIndex = Math.floor(Math.random() * alertMessages.length);
            } while (randomIndex === lastAlertIndex);
        } else {
            randomIndex = 0;
        }
        lastAlertIndex = randomIndex;
        createAndShowAlert(alertMessages[randomIndex]);
    }

    function startAlertRotation() {
        if (alertIntervalId) {
            clearInterval(alertIntervalId);
        }
        if (alertMessages.length > 0) {
            setTimeout(() => {
                displayRandomAlert();
                if (alertMessages.length > 1) {
                    alertIntervalId = setInterval(displayRandomAlert, alertRotationTime);
                }
            }, 2500);
        }
    }
    // --- FIN LÓGICA DE ALERTAS TEMPORALES ---

    // --- INICIO LÓGICA DE TRADUCCIÓN ---
    function generateMenuItemKey(originalItemName, type) {
        const baseKey = originalItemName.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/ñ/g, 'n')
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
        return `menu.item_${baseKey}_${type}`;
    }

    function generateMenuCategoryKey(categoryName) {
        const baseKey = categoryName.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/ñ/g, 'n')
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
        return `menu.category_${baseKey}`;
    }

    let currentLanguage = 'es';
    window.originalFetchedMenuData = null;
    let isInitialLoad = true;

    async function setLanguage(lang) {
        if (!siteTranslations[lang]) {
            console.warn(`Traducciones para el idioma '${lang}' no encontradas. Usando '${currentLanguage}'.`);
            lang = currentLanguage;
        }
        currentLanguage = lang;

        document.documentElement.lang = lang;
        const titleKey = 'page_title';
        document.title = siteTranslations[lang]?.[titleKey] || siteTranslations['es']?.[titleKey] || document.title;

        document.querySelectorAll('[data-translation-key]').forEach(element => {
            const key = element.dataset.translationKey;
            let translation = siteTranslations[lang]?.[key];
            if (translation === undefined && lang !== 'es') {
                translation = siteTranslations['es']?.[key];
            }
            if (translation !== undefined) {
                if (key.endsWith('_html')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        localStorage.setItem('preferredLanguage', lang);
        document.querySelectorAll('#language-selector .lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        if (window.originalFetchedMenuData) {
            if (!isInitialLoad) {
                createMenuSection(window.originalFetchedMenuData, currentLanguage);
                initializeGalleryCarousel(window.originalFetchedMenuData, currentLanguage);
            }
            // Las alertas son independientes del idioma y no necesitan refresco aquí
        }
    }

    const getTranslatedDescription = (item, lang) => {
        const descriptionKey = generateMenuItemKey(item.originalName, 'description');
        return siteTranslations[lang]?.[descriptionKey] || siteTranslations['es']?.[descriptionKey] || item.description;
    };

    const getTranslatedName = (item, lang) => {
        const nameKey = generateMenuItemKey(item.originalName, 'name');
        return siteTranslations[lang]?.[nameKey] || siteTranslations['es']?.[nameKey] || item.name;
    };

    const createMenuSection = (menuData, lang) => {
        const menuCategoriesContainer = document.getElementById('menu-categories');
        if (!menuCategoriesContainer) {
            console.error("El contenedor del menú 'menu-categories' no fue encontrado.");
            return;
        }
        menuCategoriesContainer.innerHTML = '';
        for (const categoryOriginalName in menuData) {
            const categoryKey = generateMenuCategoryKey(categoryOriginalName);
            const translatedCategoryName = siteTranslations[lang]?.[categoryKey] || siteTranslations['es']?.[categoryKey] || categoryOriginalName;
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.innerHTML = `<h3>${translatedCategoryName}</h3>`;
            const galleryDiv = document.createElement('div');
            galleryDiv.classList.add('gallery');
            menuData[categoryOriginalName].forEach((item, index) => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-card');
                menuItemDiv.style.animationDelay = `${index * 0.1}s`;
                const translatedItemName = getTranslatedName(item, lang);
                const translatedItemDescription = getTranslatedDescription(item, lang);
                menuItemDiv.innerHTML = `
                    <h4>${translatedItemName}</h4>
                    <span class="tooltip">${translatedItemDescription}</span>
                `;
                galleryDiv.appendChild(menuItemDiv);
            });
            categoryDiv.appendChild(galleryDiv);
            menuCategoriesContainer.appendChild(categoryDiv);
        }
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
    };

    try {
        const response = await fetch('menu.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawMenuData = await response.json();
        window.originalFetchedMenuData = {};
        for (const category in rawMenuData) {
            window.originalFetchedMenuData[category] = rawMenuData[category].map(item => ({
                ...item,
                originalName: item.name
            }));
        }
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
        await setLanguage(preferredLanguage);
        if (window.originalFetchedMenuData) {
            createMenuSection(window.originalFetchedMenuData, currentLanguage);
            initializeGalleryCarousel(window.originalFetchedMenuData, currentLanguage);
        }
        startAlertRotation(); // Iniciar las alertas aquí
        isInitialLoad = false;
    } catch (error) {
        console.error("No se pudieron cargar los datos del menú desde menu.json:", error);
        const menuCategoriesContainer = document.getElementById('menu-categories');
        if (menuCategoriesContainer) {
            menuCategoriesContainer.innerHTML = "<p style='color:red; text-align:center;'>Error al cargar el menú. Intente más tarde.</p>";
        }
    }

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

    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    const locationBtn = document.getElementById('location-btn');
    const locationModal = document.getElementById('location-modal');
    const closeModalBtn = document.getElementById('close-modal');
    if (locationBtn && locationModal && closeModalBtn) {
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

    function inicializarCarrusel(carouselId, carouselDataAttribute, imagePathPrefix, itemsData, getItemHtml) {
        const carouselElement = document.getElementById(carouselId);
        const dotsContainerElement = document.querySelector(`.carousel-dots[data-carousel-dots="${carouselDataAttribute}"]`);
        const prevBtnElement = document.querySelector(`.carousel-prev[data-carousel="${carouselDataAttribute}"]`);
        const nextBtnElement = document.querySelector(`.carousel-next[data-carousel="${carouselDataAttribute}"]`);

        if (!carouselElement || !dotsContainerElement || !prevBtnElement || !nextBtnElement) {
            return;
        }
        let currentIndex = 0;
        const intervalTime = 8000;
        let autoSlide;

        const generarItems = () => {
            carouselElement.innerHTML = '';
            dotsContainerElement.innerHTML = '';
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
                const dot = document.createElement('span');
                dot.classList.add('carousel-dot');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainerElement.appendChild(dot);
            });
            prevBtnElement.style.display = 'block';
            nextBtnElement.style.display = 'block';
            dotsContainerElement.style.display = 'block';
        };

        const actualizarDots = () => {
            const dots = dotsContainerElement.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
        };
        const goToSlide = (index) => {
            const items = carouselElement.querySelectorAll('.carousel-item');
            if (items.length === 0) return;
            currentIndex = (index + items.length) % items.length;
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
            detenerAutoSlide();
            const items = carouselElement.querySelectorAll('.carousel-item');
            if (items.length <= 1) return;
            autoSlide = setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                actualizarCarrusel();
            }, intervalTime);
        };
        const detenerAutoSlide = () => clearInterval(autoSlide);

        generarItems();
        const items = carouselElement.querySelectorAll('.carousel-item');
        if (items.length > 0) {
            prevBtnElement.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
                detenerAutoSlide();
                iniciarAutoSlide();
            });
            nextBtnElement.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
                detenerAutoSlide();
                iniciarAutoSlide();
            });
            carouselElement.addEventListener('mouseenter', detenerAutoSlide);
            carouselElement.addEventListener('mouseleave', iniciarAutoSlide);
            actualizarCarrusel();
            iniciarAutoSlide();
        }
    }

    const initializeGalleryCarousel = (menuDataParam, lang) => {
        const galeriaItems = [];
        if (typeof menuDataParam === 'object' && menuDataParam !== null) {
            for (const category in menuDataParam) {
                if (Array.isArray(menuDataParam[category])) {
                    menuDataParam[category].forEach(item => {
                        if (item && item.originalName && typeof item.originalName === 'string' && item.image) {
                            const translatedName = getTranslatedName(item, lang);
                            const translatedDescription = getTranslatedDescription(item, lang);
                            galeriaItems.push({
                                name: translatedName,
                                description: translatedDescription,
                                imageName: item.image,
                                originalName: item.originalName
                            });
                        }
                    });
                }
            }
        }
        function getGaleriaItemHtml(item, imagePathPrefix) {
            const imageSrc = `${imagePathPrefix}${item.imageName}`;
            const desc = item.description ? item.description.split('.')[0] : (siteTranslations[lang]?.['default_plate_description'] || 'Delicioso plato');
            return `
                <img src="${imageSrc}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 50px;\\'>${(siteTranslations[lang]?.['image_not_available'] || 'Imagen no disponible')} (${item.imageName})</p>'">
                <div class="carousel-caption">${item.name} - ${desc}</div>
            `;
        }
        inicializarCarrusel('carousel', 'galeria', 'images/gallery/', galeriaItems, getGaleriaItemHtml);
    };

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
    ];
    function getRecuerdosItemHtml(item, imagePathPrefix) {
        const desc = item.description || 'Un momento especial';
        return `
            <img src="${imagePathPrefix}${item.imageName}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 50px;\\'>Imagen no disponible</p>'">
            <div class="carousel-caption">${item.name} - ${desc}</div>
        `;
    }
    inicializarCarrusel('carousel-recuerdos', 'recuerdos', 'images/nueva_galeria_recuerdos/', nuestrosRecuerdosItems, getRecuerdosItemHtml);

    document.querySelectorAll('#language-selector .lang-btn').forEach(button => {
        button.addEventListener('click', async (event) => {
            await setLanguage(event.target.dataset.lang);
            // No es necesario reiniciar la rotación del banner aquí ya que fue eliminado
            // PERO SÍ NECESITAMOS REINICIAR LA ROTACIÓN DE ALERTAS si es un cambio de idioma
            if (typeof startAlertRotation === "function") { // Comprobar si la función existe
                startAlertRotation(); // Reinicia el ciclo de alertas con el nuevo idioma si es necesario
            }
        });
    });
});

[end of script.js]

document.addEventListener('DOMContentLoaded', async () => {
    // Mover la inicialización de bannerContentElement aquí,
    // porque el DOM ya está cargado.
    bannerContentElement = document.getElementById('dynamic-banner-content');

    // Objeto de Traducciones
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

            // Categorías del Menú
            "menu.category_Entrantes": "Entrantes",
            "menu.category_Sopas": "Sopas",
            "menu.category_Cremas": "Cremas",
            "menu.category_Platos_Principales": "Platos Principales",

            // Items del menu (Español) - Nombres y Descripciones
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
            "menu.item_pollo_a_la_barbacoa_description": "Pollo en salsa de soja y mantequilla elaborado a fuego lento hasta 45 minutos.",

            // Mensajes del Banner Dinámico
            "banner.message1": "Una pequeña propina es una gran forma de agradecer su dedicación.",
            "banner.message2": "Nuestros meseros están capacitados para recomendarte lo mejor del menú.",
            "banner.message3": "Pregunta a nuestro personal, ¡estamos aquí para ayudarte!",
            "banner.message4": "Disfruta la autenticidad de nuestra comida criolla, hecha con amor.",
            "banner.message5": "Tu generosidad ayuda a nuestro personal a seguir sonriendo.",
            "banner.message6": "Cada bocado es una explosión de tradición y sazón."
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
            // ... (NECESITO EL RESTO DE TRADUCCIONES EN INGLÉS PARA COMPLETAR) ...
            "menu.category_Entrantes": "Appetizers", // Ejemplo
            "menu.item_fricase_de_cerdo_name": "Pork Fricassee", // Ejemplo
            "menu.item_fricase_de_cerdo_description": "Pork stewed in a Creole tomato sauce, served with white rice.", // Ejemplo

            // Traducciones Banner EN
            "banner.message1": "A small tip is a great way to appreciate their dedication.",
            "banner.message2": "Our waiters are trained to recommend the best of the menu.",
            "banner.message3": "Ask our staff, we are here to help you!",
            "banner.message4": "Enjoy the authenticity of our Creole food, made with love.",
            "banner.message5": "Your generosity helps our staff keep smiling.",
            "banner.message6": "Every bite is an explosion of tradition and flavor."
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
            // ... (NECESITO EL RESTO DE TRADUCCIONES EN ITALIANO PARA COMPLETAR) ...
            "menu.category_Entrantes": "Antipasti", // Ejemplo
            "menu.item_fricase_de_cerdo_name": "Fricassea di Maiale", // Ejemplo
            "menu.item_fricase_de_cerdo_description": "Spezzatino di maiale in salsa creola di pomodoro, accompagnato da riso bianco.", // Ejemplo

            // Traducciones Banner IT
            "banner.message1": "Una piccola mancia è un ottimo modo per apprezzare la loro dedizione.",
            "banner.message2": "I nostri camerieri sono formati per consigliarti il meglio del menu.",
            "banner.message3": "Chiedi al nostro personale, siamo qui per aiutarti!",
            "banner.message4": "Goditi l'autenticità del nostro cibo creolo, fatto con amore.",
            "banner.message5": "La tua generosità aiuta il nostro personale a continuare a sorridere.",
            "banner.message6": "Ogni boccone è un'esplosione di tradizione e sapore."
        }
    };

    // --- INICIO LÓGICA BANNER DINÁMICO ---
    const bannerMessageKeys = [
        "banner.message1",
        "banner.message2",
        "banner.message3",
        "banner.message4",
        "banner.message5",
        "banner.message6"
    ];
    let currentBannerMessageIndex = -1; // Para asegurar que el primer mensaje sea aleatorio y no siempre el mismo
    let bannerIntervalId = null;
    const bannerDisplayTime = 10000; // 10 segundos
    const bannerFadeTime = 500; // 0.5 segundos para la transición de opacidad
    let bannerContentElement = null; // Se inicializará en DOMContentLoaded

    function displayNextBannerMessage() {
        if (!bannerContentElement || bannerMessageKeys.length === 0) {
            return;
        }
        bannerContentElement.classList.add('fade-out');
        setTimeout(() => {
            let randomIndex;
            if (bannerMessageKeys.length > 1) {
                do {
                    randomIndex = Math.floor(Math.random() * bannerMessageKeys.length);
                } while (randomIndex === currentBannerMessageIndex);
            } else {
                randomIndex = 0;
            }
            currentBannerMessageIndex = randomIndex;
            const messageKey = bannerMessageKeys[currentBannerMessageIndex];
            let translatedMessage = siteTranslations[currentLanguage]?.[messageKey] || siteTranslations['es']?.[messageKey];
            if (!translatedMessage) {
                translatedMessage = messageKey;
            }
            bannerContentElement.textContent = translatedMessage;
            bannerContentElement.classList.remove('fade-out');
        }, bannerFadeTime);
    }

    function startBannerRotation() {
        if (bannerIntervalId) {
            clearInterval(bannerIntervalId);
        }
        // Asegurarse que bannerContentElement esté definido antes de usarlo
        if (!bannerContentElement) { // Esta comprobación es por si se llama antes de DOMContentLoaded
            bannerContentElement = document.getElementById('dynamic-banner-content');
            if(!bannerContentElement) return; // Si aún no existe, no hacer nada.
        }

        if (bannerMessageKeys.length > 0 && bannerContentElement) {
            displayNextBannerMessage();
            if (bannerMessageKeys.length > 1) {
                bannerIntervalId = setInterval(displayNextBannerMessage, bannerDisplayTime + (bannerFadeTime * 2));
            }
        }
    }
    // --- FIN LÓGICA BANNER DINÁMICO ---

    // --- INICIO LÓGICA DE TRADUCCIÓN ---

    // Helper function to generate consistent keys for menu item names and descriptions
    function generateMenuItemKey(originalItemName, type) {
        const baseKey = originalItemName.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar tildes
            .replace(/ñ/g, 'n')
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
        return `menu.item_${baseKey}_${type}`;
    }

    // Helper function to generate consistent keys for menu categories
    function generateMenuCategoryKey(categoryName) {
        const baseKey = categoryName.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar tildes
            .replace(/ñ/g, 'n')
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
        return `menu.category_${baseKey}`;
    }

    let currentLanguage = 'es'; // Idioma por defecto
    window.originalFetchedMenuData = null; // Para almacenar los datos originales del menú
    let isInitialLoad = true; // Bandera para la carga inicial

    async function setLanguage(lang) {
        if (!siteTranslations[lang]) {
            console.warn(`Traducciones para el idioma '${lang}' no encontradas. Usando '${currentLanguage}'.`);
            lang = currentLanguage; // Usar el idioma actual si el nuevo no es válido
        }
        currentLanguage = lang; // Actualizar el idioma global

        // 1. Actualizar lang del HTML y título de la página
        document.documentElement.lang = lang;
        const titleKey = 'page_title';
        document.title = siteTranslations[lang]?.[titleKey] || siteTranslations['es']?.[titleKey] || document.title;

        // 2. Traducir todos los elementos estáticos con data-translation-key
        document.querySelectorAll('[data-translation-key]').forEach(element => {
            const key = element.dataset.translationKey;
            let translation = siteTranslations[lang]?.[key];

            if (translation === undefined && lang !== 'es') { // Fallback a español
                translation = siteTranslations['es']?.[key];
            }

            if (translation !== undefined) {
                if (key.endsWith('_html')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
            // Si la traducción sigue siendo undefined, el texto original del HTML se mantiene.
        });

        // 3. Guardar preferencia en localStorage
        localStorage.setItem('preferredLanguage', lang);

        // 4. Actualizar clase 'active' en botones de idioma
        document.querySelectorAll('#language-selector .lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // 5. Refrescar contenido dinámico (menú, galería, banner) SOLO si no es la carga inicial
        // O si ya se han cargado los datos del menú
        if (window.originalFetchedMenuData) {
            if (!isInitialLoad) { // Si es un cambio de idioma por el usuario, no la carga inicial
                createMenuSection(window.originalFetchedMenuData, currentLanguage);
                initializeGalleryCarousel(window.originalFetchedMenuData, currentLanguage);
            }
            // El banner siempre se refresca para asegurar que tome el idioma correcto
            if (typeof displayNextBannerMessage === "function" && bannerMessageKeys.length > 0) {
                // La rotación del banner se manejará/reiniciará explícitamente después de setLanguage si es necesario
                // o al final de la inicialización. Por ahora, solo mostramos el mensaje actual traducido.
                if (bannerIntervalId) clearInterval(bannerIntervalId); // Detener la rotación para evitar que cambie justo después de traducir
                displayNextBannerMessage(); // Actualizar el mensaje actual del banner al nuevo idioma
                // La rotación se reiniciará en startBannerRotation o después de la carga inicial si es necesario
            }
        }
    }

    // Función para obtener la descripción traducida del plato
    const getTranslatedDescription = (item, lang) => {
        const descriptionKey = generateMenuItemKey(item.originalName, 'description');
        return siteTranslations[lang]?.[descriptionKey] || siteTranslations['es']?.[descriptionKey] || item.description;
    };

    // Función para obtener el nombre traducido del plato
    const getTranslatedName = (item, lang) => {
        const nameKey = generateMenuItemKey(item.originalName, 'name');
        return siteTranslations[lang]?.[nameKey] || siteTranslations['es']?.[nameKey] || item.name;
    };


    // Función para generar el menú dinámicamente con traducciones
    const createMenuSection = (menuData, lang) => {
        const menuCategoriesContainer = document.getElementById('menu-categories');
        if (!menuCategoriesContainer) {
            console.error("El contenedor del menú 'menu-categories' no fue encontrado.");
            return;
        }
        menuCategoriesContainer.innerHTML = '';

        for (const categoryOriginalName in menuData) { // categoryOriginalName es "Entrantes", "Sopas", etc.
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

                const imagePath = item.image ? `images/menu/${item.image}` : 'images/gallery/placeholder.jpg';

                menuItemDiv.innerHTML = `
                    <img src="${imagePath}" alt="${translatedItemName}" class="menu-image" onerror="this.src='images/gallery/placeholder.jpg'; this.alt='Imagen no disponible';">
                    <h4>${translatedItemName}</h4>
                    <p>${item.price ? item.price.toFixed(2) + ' CUP' : (siteTranslations[lang]?.['price_not_available'] || 'Precio no disponible')}</p>
                    <span class="tooltip">${translatedItemDescription}</span>
                `;
                galleryDiv.appendChild(menuItemDiv);
            });
            categoryDiv.appendChild(galleryDiv);
            menuCategoriesContainer.appendChild(categoryDiv);
        }

        // Toggle para expandir/contraer categorías (sin cambios aquí)
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
    // let fetchedMenuData = {}; // Se usará window.originalFetchedMenuData en su lugar
    try {
        const response = await fetch('menu.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawMenuData = await response.json();
        // Pre-procesar los datos del menú para añadir originalName
        window.originalFetchedMenuData = {};
        for (const category in rawMenuData) {
            window.originalFetchedMenuData[category] = rawMenuData[category].map(item => ({
                ...item,
                originalName: item.name // Guardar el nombre original en español
            }));
        }

        // Configurar idioma inicial y cargar contenido estático
        const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
        await setLanguage(preferredLanguage);

        // Renderizar contenido dinámico por primera vez
        if (window.originalFetchedMenuData) {
            createMenuSection(window.originalFetchedMenuData, currentLanguage);
            initializeGalleryCarousel(window.originalFetchedMenuData, currentLanguage);
        }

        startBannerRotation(); // Iniciar el banner después de que todo esté configurado
        isInitialLoad = false; // Marcar que la carga inicial ha terminado

    } catch (error) {
        console.error("No se pudieron cargar los datos del menú desde menu.json:", error);
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
    // Esta sección ahora dependerá de fetchedMenuData y el idioma actual
    const initializeGalleryCarousel = (menuDataParam, lang) => {
        const galeriaItems = [];
        if (typeof menuDataParam === 'object' && menuDataParam !== null) {
            for (const category in menuDataParam) {
                if (Array.isArray(menuDataParam[category])) {
                    menuDataParam[category].forEach(item => {
                        // Usar item.originalName para asegurar que siempre se refiere al nombre base para la clave
                        if (item && item.originalName && typeof item.originalName === 'string' && item.image) {
                            const translatedName = getTranslatedName(item, lang);
                            const translatedDescription = getTranslatedDescription(item, lang);
                            galeriaItems.push({
                                name: translatedName, // Nombre traducido para mostrar
                                description: translatedDescription, // Descripción traducida
                                imageName: item.image, // Nombre de archivo de imagen no cambia
                                originalName: item.originalName // Mantener por si acaso
                            });
                        }
                    });
                }
            }
        }

        function getGaleriaItemHtml(item, imagePathPrefix) {
            const imageSrc = `${imagePathPrefix}${item.imageName}`;
            // Usar la descripción ya traducida que se pasó en galeriaItems
            const desc = item.description ? item.description.split('.')[0] : (siteTranslations[lang]?.['default_plate_description'] || 'Delicioso plato');

            return `
                <img src="${imageSrc}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 50px;\\'>${(siteTranslations[lang]?.['image_not_available'] || 'Imagen no disponible')} (${item.imageName})</p>'">
                <div class="carousel-caption">${item.name} - ${desc}</div>
            `;
        }
        inicializarCarrusel('carousel', 'galeria', 'images/gallery/', galeriaItems, getGaleriaItemHtml);
    };

    // La llamada a initializeGalleryCarousel se hace dentro de setLanguage después de cargar los datos.

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

    // --- FIN LÓGICA DE TRADUCCIÓN ---

    // --- INICIO LÓGICA BANNER DINÁMICO ---
    const bannerMessageKeys = [
        "banner.message1",
        "banner.message2",
        "banner.message3",
        "banner.message4",
        "banner.message5",
        "banner.message6"
    ];
    let currentBannerMessageIndex = -1; // Para asegurar que el primer mensaje sea aleatorio y no siempre el mismo
    let bannerIntervalId = null;
    const bannerDisplayTime = 10000; // 10 segundos
    const bannerFadeTime = 500; // 0.5 segundos para la transición de opacidad

    const bannerContentElement = document.getElementById('dynamic-banner-content');

    function displayNextBannerMessage() {
        if (!bannerContentElement || bannerMessageKeys.length === 0) {
            // console.log("Banner element o mensajes no encontrados.");
            return;
        }

        bannerContentElement.classList.add('fade-out'); // Inicia el fade-out

        setTimeout(() => {
            let randomIndex;
            if (bannerMessageKeys.length > 1) {
                do {
                    randomIndex = Math.floor(Math.random() * bannerMessageKeys.length);
                } while (randomIndex === currentBannerMessageIndex);
            } else {
                randomIndex = 0; // Si solo hay un mensaje, mostrar siempre ese
            }
            currentBannerMessageIndex = randomIndex;

            const messageKey = bannerMessageKeys[currentBannerMessageIndex];
            // Usar currentLanguage que es la variable global del idioma actual
            let translatedMessage = siteTranslations[currentLanguage]?.[messageKey] || siteTranslations['es']?.[messageKey];

            if (!translatedMessage) {
                // console.warn(`Traducción para banner no encontrada: ${messageKey}`);
                translatedMessage = messageKey; // Mostrar la clave si no hay traducción
            }

            bannerContentElement.textContent = translatedMessage;
            bannerContentElement.classList.remove('fade-out'); // Inicia el fade-in
        }, bannerFadeTime);
    }

    function startBannerRotation() {
        if (bannerIntervalId) {
            clearInterval(bannerIntervalId);
        }
        if (bannerMessageKeys.length > 0 && bannerContentElement) {
            displayNextBannerMessage(); // Mostrar el primer mensaje inmediatamente
            if (bannerMessageKeys.length > 1) {
                 // El tiempo de intervalo debe ser el tiempo de visualización + el tiempo de fade out + el tiempo de fade in
                bannerIntervalId = setInterval(displayNextBannerMessage, bannerDisplayTime + (bannerFadeTime * 2));
            }
        } else {
            // console.log("No se inicia la rotación del banner, no hay mensajes o elemento no encontrado.");
        }
    }
    // --- FIN LÓGICA BANNER DINÁMICO ---

    // Modificación en la carga inicial para iniciar el banner después de setLanguage
    // (dentro del try...catch de carga de menu.json)
    // ...
    // const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
    // await setLanguage(preferredLanguage); // setLanguage es async
    // startBannerRotation(); // Ahora se llama aquí


    // Añadir listeners a los botones de idioma
    document.querySelectorAll('#language-selector .lang-btn').forEach(button => {
        button.addEventListener('click', async (event) => { // Hacer el listener async
            await setLanguage(event.target.dataset.lang); // setLanguage es async
            // Después de que setLanguage haya actualizado todo, incluyendo el mensaje actual del banner,
            // reiniciamos explícitamente la rotación del banner.
            if (typeof startBannerRotation === "function") {
                startBannerRotation();
            }
        });
    });
});

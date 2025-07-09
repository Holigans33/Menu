document.addEventListener('DOMContentLoaded', async () => {
    // --- TRADUCCIONES ---
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
            anniversary_p1_html: "<p>En nuestro restaurante celebramos con orgullo 16 años dedicados a compartir la verdadera esencia de la cocina cubana. Desde nuestros inicios, nos hemos esforzado por mantener el sabor y la tradición que nos caracteriza.</p>",
            anniversary_p2_html: "<p>Creemos firmemente en la autenticidad: cada plato que servimos es una expresión genuina de la cultura cubana, preparado con el mismo amor y dedicación que en casa.</p>",
            anniversary_p3_html: "<p>La cubanía es nuestro sello: aquí no solo se viene a comer, sino a vivir una experiencia donde la música, la alegría y la calidez humana se sienten en cada rincón. ¡Gracias por ser parte de nuestra historia!</p>",
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
            price_not_available: "Precio no disponible",
            image_not_available: "Imagen no disponible",
            default_plate_description: "Delicioso plato",
            "menu.category_Entrantes": "Entrantes",
            "menu.category_Sopas": "Sopas",
            "menu.category_Cremas": "Cremas",
            "menu.category_Platos_Principales": "Platos Principales",
            // ... (resto de traducciones)
        },
        en: {
            page_title: "Delicias Cubanas - Restaurant",
            nav_home: "Home",
            nav_menu: "Menu",
            hero_title: "Welcome to Delicias Cubanas",
            anniversary_title: "16 years of authentic Cuban spirit and respect",
            anniversary_p1_html: "<p>In our restaurant, we proudly celebrate 16 years dedicated to sharing the true essence of Cuban cuisine. Since our beginnings, we have strived to keep the taste and tradition that makes us unique.</p>",
            anniversary_p2_html: "<p>We firmly believe in authenticity: every dish we serve is a genuine expression of Cuban culture, prepared with the same love and dedication as at home. We promise to delight you!</p>",
            anniversary_p3_html: "<p>Cuban identity is our hallmark: here, you don't just come to eat, but to live an experience where music, joy, and human warmth are felt in every corner. Thank you for being part of our story!</p>",
            price_not_available: "Price not available",
            image_not_available: "Image not available",
            default_plate_description: "Delicious dish",
            "menu.category_Entrantes": "Appetizers",
            // ... (rest of necessary translations)
        },
        it: {
            page_title: "Delicias Cubanas - Ristorante",
            nav_home: "Inizio",
            nav_menu: "Menù",
            hero_title: "Benvenuti a Delicias Cubanas",
            anniversary_title: "16 anni di autentica cubanità e rispetto",
            anniversary_p1_html: "<p>Nel nostro ristorante celebriamo con orgoglio 16 anni dedicati a condividere la vera essenza della cucina cubana. Fin dai nostri inizi, ci siamo sforzati di mantenere il sapore e la tradizione che ci caratterizzano.</p>",
            anniversary_p2_html: "<p>Crediamo fermamente nell'autenticità: ogni piatto che serviamo è un'espressione genuina della cultura cubana, preparato con lo stesso amore e dedizione di casa.</p>",
            anniversary_p3_html: "<p>La cubanità è il nostro sigillo: qui non si viene solo per mangiare, ma per vivere un'esperienza dove la musica, la gioia e il calore umano si sentono in ogni angolo. Grazie per far parte della nostra storia!</p>",
            price_not_available: "Prezzo non disponibile",
            image_not_available: "Immagine non disponibile",
            default_plate_description: "Piatto delizioso",
            "menu.category_Entrantes": "Antipasti",
            // ... (resto de traducciones necesarias)
        }
    };

    // --- ALERTAS TEMPORALES ---
    const alertMessages = [
        "Una pequeña propina es una gran forma de agradecer su dedicación.",
        "Nuestros meseros están capacitados para recomendarte lo mejor del menú.",
        "Pregunta a nuestro personal, ¡estamos aquí para ayudarte!",
        "Disfruta la autenticidad de nuestra comida criolla, hecha con amor.",
        "Tu generosidad ayuda a nuestro personal a seguir sonriendo.",
        "Cada bocado es una explosión de tradición y sazón."
    ];
    let currentAlert = null;
    let alertTimeoutId = null;
    let alertIntervalId = null;
    let lastAlertIndex = -1;
    const alertDuration = 4000;
    const alertRotationTime = 12000;
    const alertFadeDuration = 300;

    function removeCurrentAlert(wasManuallyClosed = false) {
        if (currentAlert) {
            currentAlert.classList.remove('alert-visible');
            setTimeout(() => {
                if (currentAlert && currentAlert.parentElement) {
                    currentAlert.parentElement.removeChild(currentAlert);
                }
                currentAlert = null;
            }, alertFadeDuration);
        }
        if (alertTimeoutId) {
            clearTimeout(alertTimeoutId);
            alertTimeoutId = null;
        }
    }

    function createAndShowAlert(message) {
        if (currentAlert) {
            removeCurrentAlert();
            setTimeout(() => createAndShowAlert(message), alertFadeDuration + 50);
            return;
        }

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
    // --- FIN ALERTAS TEMPORALES ---

    // --- FUNCIONES DE TRADUCCIÓN Y MENÚ ---
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
        document.title = siteTranslations[lang]?.page_title || siteTranslations['es']?.page_title || document.title;

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

    // --- FUNCIONES DE CARRUSEL (antes de uso) ---
    function initializeGalleryCarousel(menuDataParam, lang) {
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
                <img src="${imageSrc}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 30px;\\'>${siteTranslations[lang]?.image_not_available || 'Imagen no disponible'}</p>';">
                <div class="carousel-caption">${item.name} - ${desc}</div>
            `;
        }
        inicializarCarrusel('carousel', 'galeria', 'images/gallery/', galeriaItems, getGaleriaItemHtml);
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

    // --- CARGA DE DATOS Y USO DE FUNCIONES ---
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
        startAlertRotation();
        isInitialLoad = false;
    } catch (error) {
        console.error("No se pudieron cargar los datos del menú desde menu.json:", error);
        const menuCategoriesContainer = document.getElementById('menu-categories');
        if (menuCategoriesContainer) {
            menuCategoriesContainer.innerHTML = "<p style='color:red; text-align:center;'>Error al cargar el menú. Intente más tarde.</p>";
        }
    }

    // --- CARRUSEL NUESTROS RECUERDOS ---
    const nuestrosRecuerdosItems = [
        { name: "Recuerdo 1", description: "Momento especial", imageName: "WhatsApp Image 2025-06-22 at 6.18.15 PM.jpeg" },
        // ... (agrega aquí el resto de tus recuerdos)
    ];
    function getRecuerdosItemHtml(item, imagePathPrefix) {
        const desc = item.description || 'Un momento especial';
        return `
            <img src="${imagePathPrefix}${item.imageName}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML += '<p style=\\'text-align:center; color: #888; padding-top: 30px;\\'>Imagen no disponible</p>';">
            <div class="carousel-caption">${item.name} - ${desc}</div>
        `;
    }
    inicializarCarrusel('carousel-recuerdos', 'recuerdos', 'images/nueva_galeria_recuerdos/', nuestrosRecuerdosItems, getRecuerdosItemHtml);

    // --- SELECTOR DE IDIOMA ---
    document.querySelectorAll('#language-selector .lang-btn').forEach(button => {
        button.addEventListener('click', async (event) => {
            await setLanguage(event.target.dataset.lang);
            if (typeof startAlertRotation === "function") {
                startAlertRotation();
            }
        });
    });

    // --- ANIMACIONES Y EVENTOS SECUNDARIOS ---
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
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
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
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

    // --- MODAL DE UBICACIÓN ---
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
});

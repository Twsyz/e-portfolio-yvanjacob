(function(){
    if(window.emailjs){
        emailjs.init("TmXcigb19AaGPYHvR"); 
    } else {
        console.error("EmailJS non chargé !");
    }
})();
// ======================
// Traductions
// ======================
const translations = {
  fr: {
    title: "E-Portfolio d'Yvan JACOB",
    main_title: "E-Portfolio d'Yvan JACOB",
    menu_home: "Accueil",
    menu_activite: "Sports et autres activités",
    menu_ingenieur: "Projets d'ingénieurs",
    menu_exp: "Expériences professionnelles, internationales",
    menu_civic: "Expériences civiques",
    menu_cv: "CV",
    intro_text: "Moi, c'est Yvan JACOB, je suis étudiant à l'ENSEEIHT (Mécanique des fluides – Eau – Environnement) en première année. Vous pouvez découvrir ici mon parcours et mes différentes expériences . Si vous avez une quelconque question, vous pouvez passer par le formulaire de contact.",

    filter_travail_label: "Travail",
    filter_vacances_label: "Vacances",
    filter_echange_label: "Échange scolaire",
    // 🇫🇷 France
    exp_fr_title: "🇫🇷 France — Travail d'été",
    exp_fr_text: "Durant l'été 2024, j'ai décidé de travailler 6 semaines dans une usine, sur chaîne de production. Cela m'a permis d'avoir une première approche du monde du travail mais aussi de mieux comprendre les compétences attendues d'un ouvrier et les enjeux du métier. J'ai plus précisément découvert tout un écosystème avec des collègues heureux de travailler en équipe.",

    // 🇹🇿 Tanzanie
    exp_tz_title: "🇹🇿 Tanzanie — Vacances",
    exp_tz_text: "En 2019, j'ai effectué un voyage en famille en Tanzanie, où nous avons pu découvrir la faune et la culture locales. En effet, malgré les différences entre la culture Maasaï et la nôtre, nous avons pu rencontrer des membres de tribus et partager des moments de découvertes notamment de leurs nombreux artisinats et méthodes de vies dont la chasse. J'ai eu la chance de passer du safari dans les parcs naturels, à la culture très différente de Zanzibar.",
    pres_tz: "Petite présentation de mon voyage en Tanzanie (PDF)",

    // 🇨🇳 Chine
    exp_cn_title: "🇨🇳 Chine — Vacances",
    exp_cn_text: "Mes parents m'ont emmené en Chine, durant 3 semaines de l'été 2017. Nous avons voyagé à travers le pays et découvert un nombre inimaginable d'ethnies et donc de cultures différentes. En partant des hutong de Pékin, jusqu'aux décivilisants Monastères de Labrang, tout variait: les dialectes, les habitudes alimentaires mais aussi l'architecture. Les paysages étaient des plus marquants: de l'indomptable muraille de Chine, aux montagnes colorées de Zhangye Danxia, en passant par l'armée de terre cuite de Xi'an.",

    // 🇪🇨 Équateur
    exp_ed_title: "🇪🇨 Équateur — Vacances",
    exp_ed_text: "J'ai eu la chance, en 2018, de partir en Equateur. Nous avons découvert tous les climats du pays: le coeur de l'Amazonie, les pentes abruptes du Cotopaxi mais aussi la biodiversité sans égal des îles Galapagos. Le plus étonnant, selon moi, reste la présence de tribus très réculées, que l'on a pu apercevoir depuis la pirogue, vivant de manière si paisible dans des conditions pourtant hostiles. Nous avons ensuite découvert les îles Galapagos, ces îles volcaniques, riches en biodiveristé, où j'ai pu nager avec des requins, des tortues et des iguanes marins. J'ai aussi fait beaucoup de randonnées sur les différents volcans et caldeiras de ces îles.",

    // 🇨🇱 Chili
    exp_cl_title: "🇨🇱 Chili — Vacances",
    exp_cl_text: "En 2022, toute la famille a profité d'un séjour au Chili. J'ai traversé le pays du nord au sud, découvrant les climats pluriels de ce pays côtier - en commençant par la cordillère des Andes, en passant par le désert d'Atacama, jusqu'aux fjords de Patagonie et ses impressionnants glaciers. J'ai pu faire du kayak dans des conditions extrêmes pour découvrir des paysages que jamais je n'aurais pensé voir. La ville de Valparaiso avec ses maisons colorées et la maison historique mais aussi atypique de Pablo Neruda sont selon moi des incontournables du pays. Nous avons ensuite traversé l'océan Pacifique pour découvrir l'île de Pâques et ses célèbres Moaïs entourés d'une culture et de mythes passionnants.",

    // 🇮🇳 Inde
    exp_in_title: "🇮🇳 Inde — Vacances",
    exp_in_text: "J'ai pu visiter à deux reprises l'Inde. La première fois, en 2016, mon premier grand voyage, nous avons découvert le Rajasthan, ses palais et ses forts. Les temples et la façon dont les différentes religions, l'hindouisme et le jaïnisme (ce dernier visant à ne tuer aucun être vivant), sont pratiquées, m'ont particulièrement marqué. La deuxième fois, en 2023, le voyage visait à découvrir l'est et le sud-est, à la recherche du tigre du Bengale dans le parc de Ranthambore et dans la plus grande mangrove du monde: Les Sundarbans. Durant ces deux voyages, le mode de vie de la population m'a impressioné. Malgré une pauvreté très présente, les habitants sont toujours souriants, accueillants et prêts à échanger.",

    // 🇦🇨 Açores
    exp_ac_title: "🇦🇨 Açores — Vacances",
    exp_ac_text: "Pendant la crise du covid 19, en 2021, nous avons décidé de partir en vacances aux Açores, archipel portugais au milieu de l'océan Atlantique. Nous avons découvert des paysages volcaniques, des lacs de cratères mais aussi des forêts luxuriantes. J'ai pu faire de la randonnée dans des endroits très variés, allant du bord de mer jusqu'au sommet des montagnes: notamment une ascencion difficile et rigoureuse du mont Pico, menant au sommet d'un volcan dont les pierres, brûlantes par endroits, rappellent un volcan pas totalement endormi. J'ai aussi eu la chance d'observer des baleines et des dauphins lors d'une sortie en mer. Après cela, nous avons fait un séjour à Lisbonne et à Porto, découvrant les mets locaux tels que les pasteis de Bélem, les accras de morue ou bien le fameux vin de Porto. L'architecture particulière de ces villes dans les quartiers historiques m'a beaucoup plu.",

    // 🇫🇮 Finlande
    exp_fl_title: "🇫🇮 Finlande — Échange scolaire",
    exp_fl_text: "Grâce à un correspondant finlandais, j'ai pu, en 2016, partir une semaine dans une école à Hyvinkää, à une heure d'Helsinki. J'ai pu découvrir le système scolaire finlandais, très différent du nôtre: les journées scolaires sont plus courtes et différents (cours de cuisine ou de couture par exemple). Les élèves ont beaucoup plus de liberté, ils ont l'habitude de se retrouver entre la fin des cours et les dîners pour jouer dans les sous-bois ou pratiquer le hockey. Nous avons aussi pu visiter les monuments de Helsinki. Et, grâce à un ferry, la capitale de l'Estonie: Tallin. Ce voyage, couplé à un stage intensif d'anglais, m'a permis d'obtenir ma certification Cambridge. En effet, j'ai dû et pu énormément pratiquer cette langue, me retrouvant seul dans une famille qui ne parlait pas un seul mot de français.",

    // === Réfléxion ===
    title_reflex: "Réflexion personnelle",
    exp_reflex: "Ces expériences à l’étranger m’ont permis de développer bien plus que de simples compétences linguistiques. Elles m’ont ouvert à de nouvelles cultures, appris à m’adapter à des environnements inconnus et ont renforcé ma curiosité scientifique et humaine. Chaque voyage a contribué à construire ma vision du monde et à nourrir mon ambition d’ingénieur ouvert sur l’international.",

    exp_culture_title: "🌍Ouverture culturelle",
    exp_culture_text: "Comprendre et m’intégrer à des environnements variés m’ont appris la tolérance, la patience et l’écoute active.",

    exp_adapt_title: "🤝 Adaptabilité",
    exp_adapt_text: "Chaque pays m’a confronté à des défis uniques, renforçant ma capacité à m’adapter rapidement à de nouveaux contextes.",

    exp_vis_title: "🚀Mobilités",
    exp_vis_text: "Ces expériences nourrissent mon envie de travailler sur des projets à portée mondiale, c'est pourquoi j'aimerais faire un double-diplôme (EPFL, UPM)",

    // === Engagement civic ===
    engagement_title: "Engagement civique",
    engagement_text: "Développer des compétences humaines et organisationnelles au travers d'expériences enrichissantes",

    engagement_diving_title: "Encadrement sportif",
    engagement_diving_text1: "🏊‍♂️ Club de plongée",
    engagement_diving_time: "⏱1 an",
    engagement_diving_text2: "Encadrement bénévole des entraînements apnéistes, formation aux techniques de sécurité, sensibilisation à la préservation des écosystèmes marins et aide durant les évènements (loto, repas, etc.)",
    skill_diving_1: "Organisation",
    skill_diving_2: "Sécurité",
    skill_diving_3: "Leadership",

    engagement_basket_title: "Vie associative",
    engagement_basket_text1: "🏆 Club de basket",
    engagement_basket_time: "⏱4 ans",
    engagement_basket_text2: "Participation active à l'organisation d'événements sportifs, coordination d'équipes et développement de l'esprit d'équipe dans un cadre compétitif.",
    skill_basket_1: "Organisation",
    skill_basket_2: "Mentorat",
    skill_basket_3: "Compréhension",

    engagement_delegate_title: "Représentation étudiante",
    engagement_delegate_text1: "📊 Délégué de promotion",
    engagement_delegate_time: "⏱2 ans",
    engagement_delegate_text2: "Représentation des étudiants, médiation entre l'administration et les élèves, organisation de projets collectifs et amélioration de la vie académique.",
    skill_delegate_1: "Médiation",
    skill_delegate_2: "Communication",
    skill_delegate_3: "Orientation",

    // === Parcours ingénieur ===
    ingenieur_hero_eyebrow: "Profil",
    ingenieur_hero_title: "Eleve ingenieur en mecanique des fluides, oriente simulation numerique et developpement de solutions concretes",
    ingenieur_hero_text: "Je combine approche scientifique, execution terrain et autonomie projet pour concevoir des solutions fiables, mesurables et deployables.",
    ingenieur_hero_cta_cv: "Voir mon CV",
    ingenieur_hero_cta_contact: "Me contacter",
    ingenieur_tag_1: "Mecanique des fluides",
    ingenieur_tag_2: "CFD et calcul numerique",
    ingenieur_tag_3: "Conception et prototypage 3D",
    ingenieur_tag_4: "Gestion de projet et communication",
    ingenieur_kpi_1_value: "10+",
    ingenieur_kpi_1_label: "Projets techniques et academiques",
    ingenieur_kpi_2_value: "4",
    ingenieur_kpi_2_label: "Langues disponibles sur le portfolio",
    ingenieur_kpi_3_value: "3",
    ingenieur_kpi_3_label: "Piliers competences: simulation, code, conception",
    ingenieur_kpi_4_value: "1",
    ingenieur_kpi_4_label: "Experience en Junior-Entreprise",
    ingenieur_intro_title: "Mon parcours d’ingénieur",
    ingenieur_intro_text: "Ici est décrit mon premier contact avec le monde scientifique, jusqu'aujourd'hui où je suis en première année d'école d'ingénieur.",
    ingenieu_premier_exp_title: "Premier contact avec le monde scientifique",
    ingenieur_premier_exp_text: "Durant le covid 19, et le confinement, j'ai appris les bases du javascript mais aussi les bases du développement web grâce à des cours en ligne ou bien des mentors qui répondaient à mes questions. C'est grâce à ces bases que j'ai pu développer entièrement ce site présentant mon e-portfolio.",
    ingenieu_TIPE1_title: "Mon premier projet alliant connaissances théoriques et pratiques",
    ingenieur_TIPE1_exp_text: "Mes deux premières années de CPGE m'ont poussé à développer mon premier projet concret. Une cible d'airsoft, moyennement aboutie, qui reposait sur des automatismes. Celui-ci m'a permis d'acquérir de grandes connaissances dans le domaine de la physique, mais aussi en programmation. En effet, toute la partie automatisation était faite en exclusivité grâce à Arduino.",
    ingenieu_TIPE2_title: "Mon deuxième projet, bien plus abouti, où la théorie et l'expérience s'entrecroisent",
    ingenieur_TIPE2_exp_text: "Mais c'est en réalité mon deuxième TIPE dont je suis le plus fier. J'ai été très investi et j'ai travaillé avec un préparateur du laboratoire de mon lycée: Vincent STEINMETZ. Un homme plein de ressources qui m'a appris bien plus en un an que ce que j'avais appris seul en deux. J'ai construit, automatisé, calculé des rendements et travaillé sur la thermodynamique d'une climatisation adiabatique directe. J'ai appris la soudure, l'électronique, l'impression 3D et bien d'autres techniques.",
    ingenieur_year1_title: "Première année d'école d'ingénieur à l'ENSEEIHT",
    ingenieur_year1_text: "Introduction aux fondamentaux scientifiques et techniques en mécanique des fluides, mathématiques et informatique. J'ai pu développer mes connaissances à travers des travaux pratiques, des bureaux d'étuds et des projets. J'ai renforcé mes bases en CAO, en programmation et en mécanique. J'ai aussi découvert la simulation numérique grâce à la CFD.",
    ingenieur_toolhead_title: "Conception et design d'une tête d'impression 3D",
    ingenieur_toolhead_text: "Conception d'une tête d'impression 3D pour un projet personnelle, incluant la modélisation 3D, la simulation et l'assemblage mécanique. En effet, j'ai décidé d'améliorer mon Ender3, en modifiant la tête d'impression pour apporter un meilleur refroidissement à la pièce imprimée. J'ai aussi rajouté un extrudeur en direct drive pour une plus grand précision et compatibilité. J'ai abouti ce projet en ajoutant un capteur de fin de filament et un 'filament cutter' afin de pouvoir gérer des impressions multicouleurs.",
    ingenieur_3Dprintshop_title: "Design et programmation d'une boutique d'impression 3D",
    ingenieur_3Dprintshop_text: "Développement d'une boutique d'impression 3D automatisée, intégrant la gestion des commandes, la préparation des fichiers d'impression et l'optimisation du processus de production. J'ai pour but de lancer ce site en vendant: des objets designés et imprimés par mes soins - que cela soit esthétique ou fonctionel. (En cours)",
    ingenieur_projet_fortran_1_title: "Premier contact avec le langage Fortran90",
    ingenieur_projet_fortran_1_text: "Nous avons étudié, avec une camarade, la diffusion de la concentration d'un polluant dans un cours d'eau.Il s'agit dans ce projet de se familiariser avec la bonne structure des fichiers. Ce langage est particulièrement intéressant car il est très performant, notamment pour les calculs numériques, et est très utilisé dans le domaine de la mécanique des fluides.",
    ingenieur_projet_Fluent_title: "Projets de simulation numérique avec Fluent",
    ingenieur_projet_Fluent_text: "J'ai pu faire plusieurs projets de simulation numérique avec le logiciel Fluent. J'ai notamment étudié un écoulement en conduite, une écoulement sur plaque plane mais aussi une aile d'avion. J'ai pu découvrir les différentes étapes d'une simulation numérique: la modélisation, le maillage, la résolution et l'analyse des résultats. J'ai aussi pu comparer les résultats obtenus avec des données expérimentales ou des résultats théoriques, ce qui m'a permis de mieux comprendre les phénomènes physiques en jeu. Dans le cadre de la notion des différences finies, j'ai compris ce qu'était la diffusion numérique et comment elle pouvait influencer les résultats d'une simulation numérique. Mais aussi la convergence en maillage et en temps.",
    ingenieur_projet_fortran_2_title: "Résolution numérique d'un problème d'advéction-diffusion avec Fortran90",
    ingenieur_projet_fortran_2_text: "Nous avons étudié, avec un camarade, la résolution numérique d'un problème d'advéction-diffusion en utilisant le langage Fortran90. Ce projet nous a permis de mieux comprendre les méthodes de résolution des équations aux dérivées partielles et d'appliquer ces connaissances à un problème concret. Le langage Fortran90 nous a également permis de réaliser des calculs numériques efficaces et précis.",
    ingenieur_N7Consulting_title: "Membre administrateur chez N7 Consulting",
    ingenieur_N7Consulting_text: "J'ai eu la chance de devenir membre administrateur de la Junior-EntrepriseN7 Consulting, une association d'étudiants en école d'ingénieur qui réalise des missions de conseil pour des entreprises. J'ai pu participer à la réalisation de missions pour des clients tels que l'agence spatiale européenne, travaillant sur des projets innovants et en étrite collbaration avec des partenaires comme Alten. J'ai aussi pu développer mes compétences en gestion de projet, en communication et en travail d'équipe.",
    ingenieur_odyssee_nordique_title: "Réalisation d'un site vitrine pour une association",
    ingenieur_odyssee_nordique_text: "J'ai réalisé un site vitrine pour l'association Odyssée Nordique, une association présentant un documentaire qui amène à réfléchir sur la place du vélo dans notre monde. J'ai pu mettre en pratique mes compétences en développement web pour créer un site attrayant et fonctionnel, mettant en valeur les activités de l'association et facilitant la communication avec les membres et les partenaires. J'ai aussi du réaliser tout le référencement mais aussi l'hébergement du site, ce qui m'a permis de découvrir les différentes options disponibles et de choisir la meilleure solution pour répondre aux besoins de l'association.",
    ingenieur_year2_title: "Deuxième année",
    ingenieur_year2_text: "Approfondissement en hydraulique, environnement et projets de groupe.",
    ingenieur_year3_title: "Troisième année",
    ingenieur_year3_text: "Spécialisation et préparation au stage de fin d’études.",

    // == Projets professionnels ==
    projet_texte: "Architecture navale",
    pourquoi_texte: "Pourquoi ce domaine ? Ayant fait de la voile durant mes vacances quand j'étais petit, j'ai toujours été impressionné par les bateaux à voiles. J'ai aussi vu d'immenses et de puissants navires lors des fêtes maritimes de Brest à trois reprises. C'est leur architecture, leur fonctionnement, mais aussi la manière dont ils sont conçus qui m'ont toujours fasciné. C'est pourquoi j'ai décidé de me spécialiser dans ce domaine lors de ma troisième année d'école d'ingénieur.",

    video_title: "Vidéo de présentation pour CAM",
    presentation_video: "Voici une vidéo de présentation de mon parcours et de mes projets suite à ces interviews",

    projet_domaine: "Domaine : Architecture navale, R&D, efficacité énergétique et rendement des bateaux à voiles",

    person1_name: "Personne interviewée 1 : Clément Devouassoud",
    person1_age: "Âge : 26 ans",
    person1_job: "Métier : Dessinateur industriel",
    person1_location: "Lieu : Cluses, France",

    person2_name: "Personne interviewée 2 : Baptiste Renard",
    person2_age: "Âge : 30 ans",
    person2_job: "Métier : Consultant indépendant en marketing digital",
    person2_location: "Lieu : Orléans, France",

    person3_name: "Personne interviewée 3 : Denis Lognon",
    person3_age: "Âge : 63 ans",
    person3_job: "Métier : Ingénieur hydraulique retraité",
    person3_location: "Lieu : Labry, France",

    // == Activités ==

    voile_title: "Voile",
    voile_texte: "J'ai commencé très tôt la voile avec l'optimist, j'ai ensuite continué avec le catamaran. C'est ce sport qui m'a poussé vers cette carrière professionelle.",

    rando_title: "Randonnée",
    rando_texte: "J'aime beaucoup la randonnée, j'ai fait plusieurs treks en montagne, le dernier en date étant le Tour des Aiguilles Rouges pendant l'été 2025.",

    photo_title: "Photographie",
    photo_texte: "Ce qui me plait dans la photographie reste d'immortaliser des moments, des paysages, des instants de vie.",

    cuisine_title: "Cuisine",
    cuisine_texte: "J'ai l'habitude de cuisiner pour mes proches aux grandes occasions: nouvel an, Noël. Je préfère cuisiner des plats salés mais je fais aussi une très bonne tarte aux noix caramel!",

    impression_title: "Conception et Impression 3D",
    impression_texte: "J'ai commencé l'impression 3D en 2023 avec une Creality Ender 3, puis j'ai continué avec une Kingroon KP5L. J'ai aimé la possibilité de concrétiser mes modélisations grâce à cette révolution technologique.",

    apnee_title: "Apnée",
    apnee_texte: "Etant asthmatique, je me suis dirigé vers l'apnée en 2020. Cela m'a permis de découvrir les fonds marins mais aussi de me surpasser physiquement et mentalement.",

    basket_title: "Basket",
    basket_texte: "J'ai commencé le basket en 2012, j'ai joué en club jusqu'en 2021 lorsque je m'entraînais avec une équipe de N2, les Canonniers de Metz, mais je ne participais pas aux matchs. J'aime ce sport pour son esprit d'équipe et son intensité. En effet, j'étais très investi dans mon premier club (Jura Dolois Basket) où je passais l'entièreté de mes samedis à arbitrer et faire la table de match.",

    tennis_title: "Tennis",
    tennis_texte: "A l'âge de 4 ans, je tapais déjà ma première balle. J'ai joué en club mais n'ai jamais fait beaucoup de compétition. J'aime ce sport pour la concentration et l'agilité qu'il demande.",

    percussions_title: "Percussions",
    percussions_texte: "Ayant été élevé dans une famille de musiciens, j'ai peiné à trouver un instrument qui me corresponde. J'ai trouvé les percussions en passant par la trompette et le saxophone. J'ai particulièrement apprécié mes années au conservatoire à rayonnement départemental de Dole car beaucoup d'évènements étaient organisés: batucadas, concerts du conservatoire et ce, dans des endroits variés.",

    sd_title: "Développement Durable & ODD",
    sd_subtitle: "Propositions d'engagement civique alignées avec les ODD de l'UNESCO",
    pdf_view: "📄 Voir l'image complète",
    pdf_download: "⬇️ Télécharger",
    pdf_note: "Infographie A4 portrait",
    project_title: "Projet : Réduction de la précarité étudiante",
    meta_objectives: "Objectifs",
    meta_objectives_desc: "Réduire la précarité étudiante sur les différents campus de Toulouse.",
    meta_team: "Équipe",
    meta_team_desc: "6 étudiants - INP Toulouse Modules : Coordination, Communication, Logistique",
    meta_duration: "Durée",
    meta_duration_desc: "1 an (Janvier - Décembre 2024)",
    odd_title: "ODD de l'UNESCO ciblés",
    odd_6_title: "Pas de pauvreté",
    odd_6_desc: "Réduire la pauvreté dans notre ville notamment chez les étudiants",
    odd_11_title: "Pas de faim",
    odd_11_desc: "Sensibilisation à la réduction du gaspillage alimentaire.",
    odd_12_title: "Bonne santé et bien-être",
    odd_12_desc: "Distribution de produits nécessaires aux personnes dans le besoin.",
    odd_14_title: "Réduire les inégalités",
    odd_14_desc: "Promouvoir l'inclusion sociale à travers des ateliers communautaires.",
    impact_title: "Impact mesuré",
    impact_waste: "Personnes aidées",
    impact_points: "Point de collecte",
    impact_people: "Personnes sensibilisées",
    impact_workshops: "Ateliers organisés",
    context_title: "Contexte du module CAM",
    context_desc: "Ce projet a été développé dans le cadre du module 2 'Civic Engagement & Sustainable Development Goals'. L'objectif était de créer une proposition d'engagement civique alignée avec au moins 3 ODD de l'UNESCO, présentée sous forme d'infographie A4 et d'un pitch de 3 minutes."


  },

  en: {
    title: "Yvan JACOB's E-Portfolio",
    main_title: "Yvan JACOB's E-Portfolio",
    menu_home: "Home",
    menu_activite: "Sports and other activities",
    menu_ingenieur: "Engineering Courses",
    menu_exp: "Mobility",
    menu_civic: "Civic Engagement",
    menu_cv: "Resume",
    intro_text: "I'm Yvan JACOB, a first-year student at ENSEEIHT (Fluid Mechanics - Water - Environment). Here you can discover my background and experiences. If you have any questions, feel free to use the contact form.",

    filter_travail_label: "Work",
    filter_vacances_label: "Vacation",
    filter_echange_label: "School exchange",

    // 🇫🇷 France
    exp_fr_title: "🇫🇷 France — Summer Job",
    exp_fr_text: "During the summer of 2024, I decided to work for 6 weeks in a factory on a production line. This experience provided me with my first insight into the working world and helped me better understand the skills and challenges faced by workers. I discovered an entire ecosystem with colleagues who were happy to work as a team.",

    // 🇹🇿 Tanzania
    exp_tz_title: "🇹🇿 Tanzania — Vacation",
    exp_tz_text: "In 2019, I went on a family trip to Tanzania, where we explored the local wildlife and culture. Despite the differences between the Maasai culture and our own, we had the opportunity to meet tribe members and share moments of discovery, particularly through their numerous crafts and hunting methods. I was fortunate to go on safaris in natural parks and experience the very different culture of Zanzibar.",
    pres_tz: "A brief presentation of my trip to Tanzania (PDF)",

    // 🇨🇳 China
    exp_cn_title: "🇨🇳 China — Vacation",
    exp_cn_text: "My parents took me to China for three weeks in the summer of 2017. We traveled across the country and discovered an unimaginable number of ethnic groups and thus different cultures. From the hutongs of Beijing to the awe-inspiring Labrang Monasteries, everything varied: dialects, eating habits, and architecture. The landscapes were particularly striking: from the indomitable Great Wall of China to the colorful mountains of Zhangye Danxia, and the Terracotta Army of Xi'an.",

    // 🇪🇨 Équateur
    exp_ed_title: "🇪🇨 Ecuador — Vacation",
    exp_ed_text: "In 2018, I had the chance to travel to Ecuador. We explored all the climates of the country: the heart of the Amazon, the steep slopes of Cotopaxi, and the unparalleled biodiversity of the Galapagos Islands. The most astonishing aspect, in my opinion, was the presence of very remote tribes that we could glimpse from our canoe, living peacefully in harsh conditions. We then discovered the Galapagos Islands, volcanic islands rich in biodiversity, where I swam with sharks, turtles, and marine iguanas. I also did a lot of hiking on the various volcanoes and calderas of these islands.",

    // 🇨🇱 Chile
    exp_cl_title: "🇨🇱 Chile — Vacation",
    exp_cl_text: "In 2022, my entire family enjoyed a trip to Chile. I traveled from the north to the south of the country, discovering its diverse climates - starting with the Andes mountains, passing through the Atacama Desert, and reaching the fjords of Patagonia with its impressive glaciers. I had the opportunity to kayak in extreme conditions to explore landscapes I never thought I would see. The city of Valparaiso, with its colorful houses and the historic yet unique home of Pablo Neruda, is, in my opinion, a must-see in the country. We then crossed the Pacific Ocean to discover Easter Island and its famous Moai statues surrounded by fascinating culture and myths.",

    // 🇮🇳 India
    exp_in_title: "🇮🇳 India — Vacation",
    exp_in_text: "I have visited India twice. The first time was in 2016, my first major trip, where we explored Rajasthan, its palaces, and forts. The temples and the way different religions, Hinduism and Jainism, are practiced particularly impressed me (the latter aims to avoid killing any living being). The second time was in 2023, focusing on the east and southeast: searching for the Bengal tiger in Bangalore Park and the world's largest mangrove forest: The Sundarbans. During both trips, the people were a pleasant surprise. Despite the prevalent poverty, the inhabitants are always smiling, welcoming, and well-dressed (often wearing a neatly ironed shirt).",

    // 🇦🇨 Azores
    exp_ac_title: "🇦🇨 Azores — Vacation",
    exp_ac_text: "During the COVID-19 crisis in 2021, we decided to vacation in the Azores, a Portuguese archipelago in the middle of the Atlantic Ocean. We discovered volcanic landscapes, crater lakes, and lush forests. I hiked in very diverse locations, from the seaside to mountain summits, including a challenging ascent of Mount Pico, leading to the summit of a volcano with hot stones in some areas, indicating it was not entirely dormant. I also had the chance to observe whales and dolphins during a sea excursion. After that, we spent time in Lisbon and Porto, enjoying local dishes such as Pastéis de Belém, cod fritters, and the famous Port wine. The unique architecture of these cities, especially in their historic districts with significant elevation changes, greatly appealed to me.",

    // 🇫🇮 Finland
    exp_fl_title: "🇫🇮 Finland — School Exchange",
    exp_fl_text: "Thanks to a Finnish pen pal, I was able to spend a week in a school in Hyvinkää, an hour from Helsinki, in 2016. I experienced the Finnish school system, which is very different from ours: classes are shorter and varied (including cooking classes, for example). Students have much more freedom and are accustomed to meeting up after school for activities like playing in the woods or practicing hockey. We also visited Helsinki's landmarks and, via ferry, the capital of Estonia: Tallinn. This trip, combined with an intensive English course, helped me obtain my Cambridge certification. I had to and was able to practice this language extensively, finding myself alone in a family that did not speak a single word of French.",

    // === Reflection ===
    title_reflex: "Personal Reflection",
    exp_reflex: "These experiences abroad have helped me develop much more than just language skills. They have opened me to new cultures, taught me to adapt to unfamiliar environments, and strengthened both my scientific and human curiosity. Each trip has shaped my worldview and fueled my ambition to become an engineer open to international collaboration.",

    exp_culture_title: "🌍 Cultural Openness",
    exp_culture_text: "Understanding and integrating into different environments has taught me tolerance, patience, and active listening.",

    exp_adapt_title: "🤝 Adaptability",
    exp_adapt_text: "Each country presented unique challenges, strengthening my ability to quickly adapt to new contexts.",

    exp_vis_title: "🚀 Mobility",
    exp_vis_text: "These experiences fuel my desire to work on projects with a global impact, which is why I would like to pursue a double degree (EPFL, UPM).",

    // === Civic Engagement ===
    engagement_title: "Civic Engagement",
    engagement_text: "Developing human and organizational skills through enriching experiences.",

    engagement_diving_title: "Sports Supervision",
    engagement_diving_text1: "🏊‍♂️ Diving Club",
    engagement_diving_time: "⏱1 year",
    engagement_diving_text2: "Volunteer supervision of freediving training sessions, instruction in safety techniques, awareness-raising on marine ecosystem preservation, and assistance during events (lotto, meals, etc.).",
    skill_diving_1: "Organization",
    skill_diving_2: "Safety",
    skill_diving_3: "Leadership",

    engagement_basket_title: "Community Involvement",
    engagement_basket_text1: "🏆 Basketball Club",
    engagement_basket_time: "⏱4 years",
    engagement_basket_text2: "Active participation in organizing sports events, coordinating teams, and fostering teamwork in a competitive environment.",

    engagement_delegate_title: "Student Representation",
    engagement_delegate_text1: "📊 Class Representative",
    engagement_delegate_time: "⏱2 years",
    engagement_delegate_text2: "Representing students, mediating between administration and peers, organizing collective projects, and improving academic life.",

    skill_basket_1: "Teamwork",
    skill_basket_2: "Organization",
    skill_basket_3: "Event Management",
    skill_delegate_1: "Mediation",
    skill_delegate_2: "Communication",
    skill_delegate_3: "Representation",

    // === Engineering Path ===
    ingenieur_hero_eyebrow: "Profile",
    ingenieur_hero_title: "Engineering student in fluid mechanics focused on numerical simulation and practical solution delivery",
    ingenieur_hero_text: "I combine scientific rigor, hands-on execution and project ownership to deliver reliable, measurable and deployable solutions.",
    ingenieur_hero_cta_cv: "View Resume",
    ingenieur_hero_cta_contact: "Contact Me",
    ingenieur_tag_1: "Fluid mechanics",
    ingenieur_tag_2: "CFD and numerical methods",
    ingenieur_tag_3: "3D design and prototyping",
    ingenieur_tag_4: "Project management and communication",
    ingenieur_kpi_1_value: "10+",
    ingenieur_kpi_1_label: "Technical and academic projects",
    ingenieur_kpi_2_value: "4",
    ingenieur_kpi_2_label: "Portfolio languages available",
    ingenieur_kpi_3_value: "3",
    ingenieur_kpi_3_label: "Core pillars: simulation, code, design",
    ingenieur_kpi_4_value: "1",
    ingenieur_kpi_4_label: "Junior Enterprise experience",
    ingenieur_intro_title: "My Engineering Path",
    ingenieur_intro_text: "Here is a description of my first contact with the scientific world, leading up to today where I am in my first year of engineering school.",
    ingenieu_premier_exp_title: "First Contact with the Scientific World",
    ingenieur_premier_exp_text: "During the COVID-19 lockdown, I learned the basics of JavaScript and web development through online courses and mentors who answered my questions. These foundational skills enabled me to fully develop this website showcasing my e-portfolio.",
    ingenieu_TIPE1_title: "My First Project Combining Theoretical and Practical Knowledge",
    ingenieur_TIPE1_exp_text: "My first two years in preparatory classes motivated me to develop my first concrete project: an airsoft target, moderately advanced, based on automation. This project allowed me to gain significant knowledge in physics and programming, as the entire automation part was exclusively done using Arduino.",
    ingenieu_TIPE2_title: "My Second, More Advanced Project Where Theory and Experimentation Intersect",
    ingenieur_TIPE2_exp_text: "However, I am most proud of my second TIPE project. I was highly invested and worked with a preparer from my school's laboratory: Vincent STEINMETZ. A resourceful man who taught me much more in one year than I had learned on my own in two. I built, automated, calculated efficiencies, and worked on the thermodynamics of a direct adiabatic air conditioning system. I learned welding, electronics, 3D printing, and much more.",
    ingenieur_year1_title: "First Year of Engineering School at ENSEEIHT",
    ingenieur_year1_text: "Introduction to scientific and technical fundamentals in fluid mechanics, mathematics, and computer science. I developed my knowledge through practical work, study projects, and group projects. I strengthened my foundations in CAD, programming, and mechanics. I also discovered numerical simulation through CFD.",
    ingenieur_toolhead_title: "Design and Development of a 3D Printer Toolhead",
    ingenieur_toolhead_text: "Designing a 3D printer toolhead for a personal project, including 3D modeling, simulation, and mechanical assembly. I decided to improve my Ender3 by modifying the print head to provide better cooling to the printed piece. I also added a direct drive extruder for greater precision and compatibility. I completed this project by adding a filament end sensor and a 'filament cutter' to manage multi-color prints.",
    ingenieur_3Dprintshop_title: "Design and Programming of a 3D Printing Shop",
    ingenieur_3Dprintshop_text: "Developing an automated 3D printing shop, integrating order management, print file preparation, and production process optimization. My goal is to launch this site by selling objects designed and printed by myself - whether they are aesthetic or functional. (In progress)",
    ingenieur_projet_fortran_1_title: "First Contact with Fortran90 Language",
    ingenieur_projet_fortran_1_text: "Together with a classmate, we studied the diffusion of a pollutant concentration in a watercourse. The project aimed to familiarize ourselves with the proper structure of files. This language is particularly interesting because it is very efficient, especially for numerical calculations, and is widely used in the field of fluid mechanics.",
    ingenieur_projet_Fluent_title: "Numerical Simulation Projects with Fluent",
    ingenieur_projet_Fluent_text: "I have completed several numerical simulation projects using Fluent software. I studied flow in a pipe, flow over a flat plate, and an airplane wing. I discovered the different stages of numerical simulation: modeling, meshing, solving, and analyzing results. I also compared the obtained results with experimental data or theoretical results, which allowed me to better understand the physical phenomena at play. In the context of finite difference methods, I understood what numerical diffusion is and how it can influence the results of a numerical simulation, as well as mesh and time convergence.", 
    ingenieur_projet_fortran_2_title: "Numerical Solution of an Advection-Diffusion Problem with Fortran90",
    ingenieur_projet_fortran_2_text: "Together with a classmate, we studied the numerical solution of an advection-diffusion problem using Fortran90 language. This project allowed us to better understand the methods for solving partial differential equations and to apply this knowledge to a concrete problem. The Fortran90 language also enabled us to perform efficient and precise numerical calculations.",
    ingenieur_N7Consulting_title: "N7 Consulting",
    ingenieur_N7Consulting_text: "I had the opportunity to become an administrator member of the N7 Consulting association, a student organization in engineering school that provides consulting services to companies. I was able to participate in the realization of missions for clients such as the European Space Agency, working on innovative projects and in close collaboration with partners like Alten. I also developed my skills in project management, communication, and team work.",
    ingenieur_odyssee_nordique_title: "Creation of a Showcase Website for an Association",
    ingenieur_odyssee_nordique_text: "I created a showcase website for the Odyssée Nordique association, which presents a documentary that encourages reflection on the role of bicycles in our world. I applied my web development skills to create an attractive and functional site that highlights the association's activities and facilitates communication with members and partners. I also handled all the SEO and hosting of the site, which allowed me to explore different options and choose the best solution to meet the association's needs.",
    ingenieur_year2_title: "Second Year",
    ingenieur_year2_text: "Deepening knowledge in hydraulics, environment, and group projects.",
    ingenieur_year3_title: "Third Year",
    ingenieur_year3_text: "Specialization and preparation for the final internship.",

    // == Professional Projects ==
    projet_texte: "Naval Architecture",
    pourquoi_texte: "Why this field? Having sailed during my childhood vacations, I have always been fascinated by sailboats. I have also seen immense and powerful ships during the Brest maritime festivals on three occasions. It is their architecture, functionality, and design process that have always intrigued me. This is why I decided to specialize in this field during my third year of engineering school.",
    video_title: "Presentation Video for CAM",
    presentation_video: "Here is a presentation video of my background and projects through interviews",
    projet_domaine: "Field: Naval Architecture, R&D, Energy Efficiency, and Performance of Sailing Boats",

    person1_name: "Interviewee 1: Clément Devouassoud",
    person1_age: "Age: 26 years",
    person1_job: "Occupation: ",
    person1_location: "Location: Cluses, France",

    person2_name: "Interviewee 2: Baptiste Renard",
    person2_age: "Age: 30 years",
    person2_job: "Occupation: Independent Consultant in Digital Marketing",
    person2_location: "Location: Orléans, France",

    person3_name: "Interviewee 3: Denis Lognon",
    person3_age: "Age: 63 years",
    person3_job: "Occupation: Retired Hydraulic Engineer",
    person3_location: "Location: Labry, France",

    // == Activities ==
    voile_title: "Sailing",
    voile_texte: "I started sailing very early with the Optimist and later continued with catamaran. This sport has driven me towards this professional career.",

    rando_title: "Hiking",
    rando_texte: "I really enjoy hiking and have done several mountain treks, the latest being the Tour des Aiguilles Rouges during the summer of 2025.",

    photo_title: "Photography",
    photo_texte: "What I love about photography is capturing moments, landscapes, and life instances.",

    cuisine_title: "Cooking",
    cuisine_texte: "I usually cook for my loved ones on special occasions: New Year's Eve, Christmas. I prefer cooking savory dishes but I also make a very good caramel walnut tart!",

    impression_title: "3D Design and Printing",
    impression_texte: "I started 3D printing in 2023 with a Creality Ender 3, and later continued with a Kingroon KP5L. I enjoyed the ability to bring my designs to life through this revolutionary technology.",

    apnee_title: "Freediving",
    apnee_texte: "Being asthmatic, I turned to freediving in 2020. It allowed me to explore the underwater world and push myself both physically and mentally.",

    basket_title: "Basketball",
    basket_texte: "I started playing basketball in 2012 and played in a club until 2021 when I trained with a N2 team: the Canonniers de Metz, although I did not participate in matches. I love this sport for its team spirit and intensity. I was very involved in my first club (Jura Dolois Basket), where I spent all my Saturdays refereeing and managing the score table.",

    tennis_title: "Tennis",
    tennis_texte: "At the age of 4, I hit my first ball. I played in a club but never competed much. I love this sport for the concentration and agility it requires.",

    percussions_title: "Percussion",
    percussions_texte: "Raised in a family of musicians, I sought an instrument that suited me and found percussion after trying trumpet, saxophone, and others. I particularly enjoyed my years at the Dole Regional Conservatory, because many events were organized: batucadas, conservatory concerts, and more.",

    sd_title: "Sustainable Development & SDGs",
    sd_subtitle: "Civic engagement proposals aligned with UNESCO SDGs",
    pdf_view: "📄 View full image",
    pdf_download: "⬇️ Download",
    pdf_note: "A4 portrait infographic",
    project_title: "Project: Reducing Student Poverty",
    meta_objectives: "Objectives",
    meta_objectives_desc: "Reduce student poverty on the various campuses of Toulouse.",
    meta_team: "Team",
    meta_team_desc: "6 students - INP Toulouse Modules: Coordination, Communication, Logistics",
    meta_duration: "Duration",
    meta_duration_desc: "1 year (January - December 2024)",
    odd_title: "Targeted UNESCO SDGs",
    odd_6_title: "No Poverty",
    odd_6_desc: "Reduce poverty in our city, especially among students",
    odd_11_title: "Zero Hunger",
    odd_11_desc: "Raise awareness about food waste reduction.",
    odd_12_title: "Good Health and Well-being",
    odd_12_desc: "Distribute necessary products to people in need.",
    odd_14_title: "Reduced Inequalities",
    odd_14_desc: "Promote social inclusion through community workshops.",
    impact_title: "Measured Impact",
    impact_waste: "People Helped",
    impact_points: "Collection Points",
    impact_people: "People Sensitized",
    impact_workshops: "Workshops Organized",
    context_title: "Context of the CAM Module",
    context_desc: "This project was developed as part of Module 2 'Civic Engagement & Sustainable Development Goals'. The objective was to create a civic engagement proposal aligned with at least 3 UNESCO SDGs, presented in the form of an A4 infographic and a 3-minute pitch."
  },

  es: {
    title: "E-Portafolio de Yvan JACOB",
    main_title: "E-Portafolio de Yvan JACOB",
    menu_home: "Inicio",
    menu_activite: "Deportes y otras actividades",
    menu_ingenieur: "Cursos de ingeniería",
    menu_exp: "Movilidad",
    menu_civic: "Compromiso cívico",
    menu_cv: "Currículum",
    
    intro_text: "Soy Yvan JACOB, un estudiante de primer año en ENSEEIHT (Mecánica de Fluidos - Agua - Medio Ambiente). Aquí puedes descubrir mi formación y experiencias. Si tienes alguna pregunta, no dudes en utilizar el formulario de contacto.",

    filter_travail_label: "Trabajo",
    filter_vacances_label: "Vacaciones",
    filter_echange_label: "Intercambio escolar",

    // 🇫🇷 France
    exp_fr_title: "🇫🇷 Francia — Trabajo de verano",
    exp_fr_text: "Durante el verano de 2024, decidí trabajar durante 6 semanas en una fábrica en una línea de producción. Esta experiencia me proporcionó mi primera visión del mundo laboral y me ayudó a comprender mejor las habilidades y desafíos que enfrentan los trabajadores. Descubrí todo un ecosistema con colegas que estaban felices de trabajar en equipo.",

    // 🇹🇿 Tanzania
    exp_tz_title: "🇹🇿 Tanzania — Vacaciones",
    exp_tz_text: "En 2019, fui de viaje familiar a Tanzania, donde exploramos la fauna y cultura local. A pesar de las diferencias entre la cultura masái y la nuestra, tuvimos la oportunidad de conocer a miembros de la tribu y compartir momentos de descubrimiento, especialmente a través de sus numerosos artesanías y métodos de caza. Tuve la suerte de hacer safaris en parques naturales y experimentar la cultura muy diferente de Zanzíbar.",
    pres_tz: "Una breve presentación de mi viaje a Tanzania (PDF)",

    // 🇨🇳 China
    exp_cn_title: "🇨🇳 China — Vacaciones",
    exp_cn_text: "Mis padres me llevaron a China durante tres semanas en el verano de 2017. Viajamos por todo el país y descubrimos un número inimaginable de grupos étnicos y, por lo tanto, diferentes culturas. Desde los hutongs de Pekín hasta los impresionantes monasterios de Labrang, todo variaba: dialectos, hábitos alimenticios y arquitectura. Los paisajes eran particularmente impresionantes: desde la indomable Gran Muralla China hasta las coloridas montañas de Zhangye Danxia y el Ejército de Terracota de Xi'an.",

    // 🇪🇨 Équateur
    exp_ed_title: "🇪🇨 Ecuador — Vacaciones",
    exp_ed_text: "En 2018, tuve la suerte de viajar a Ecuador. Exploramos todos los climas del país: el corazón del Amazonas, las empinadas laderas del Cotopaxi y la inigualable biodiversidad de las Islas Galápagos. Lo más asombroso, en mi opinión, fue la presencia de tribus muy remotas que pudimos vislumbrar desde nuestra canoa, viviendo pacíficamente en condiciones adversas. Luego descubrimos las Islas Galápagos, islas volcánicas ricas en biodiversidad, donde nadé con tiburones, tortugas e iguanas marinas. También hice muchas caminatas por los diversos volcanes y calderas de estas islas.",

    // 🇨🇱 Chile
    exp_cl_title: "🇨🇱 Chile — Vacaciones",
    exp_cl_text: "En 2022, toda mi familia disfrutó de un viaje a Chile. Viajé de norte a sur del país, descubriendo sus diversos climas, comenzando con las montañas de los Andes, pasando por el Desierto de Atacama y llegando a los fiordos de la Patagonia con sus impresionantes glaciares. Tuve la oportunidad de hacer kayak en condiciones extremas para explorar paisajes que nunca pensé que vería. La ciudad de Valparaíso, con sus casas coloridas y la histórica pero única casa de Pablo Neruda, es, en mi opinión, una visita obligada en el país. Luego cruzamos el Océano Pacífico para descubrir la Isla de Pascua y sus famosas estatuas Moai rodeadas de una fascinante cultura y mitos.",

    // 🇮🇳 India
    exp_in_title: "🇮🇳 India — Vacaciones",
    exp_in_text: "He visitado India dos veces. La primera vez fue en 2016, mi primer gran viaje, donde exploramos Rajasthan, sus palacios y fuertes. Los templos y la forma en que se practican las diferentes religiones, el hinduismo y el jainismo, me impresionaron particularmente (este último busca evitar matar a cualquier ser vivo). La segunda vez fue en 2023, centrándonos en el este y sureste: buscando al tigre de Bengala en el Parque Bangalore y el manglar más grande del mundo: Los Sundarbans. Durante ambos viajes, la gente fue una agradable sorpresa. A pesar de la pobreza prevalente, los habitantes siempre están sonrientes, son acogedores y bien vestidos (a menudo con una camisa bien planchada).",

    // 🇦🇨 Azores
    exp_ac_title: "🇦🇨 Azores — Vacaciones",
    exp_ac_text: "Durante la crisis de COVID-19 en 2021, decidimos vacacionar en las Azores, un archipiélago portugués en medio del Océano Atlántico. Descubrimos paisajes volcánicos, lagos de cráteres y bosques exuberantes. Caminé en lugares muy diversos, desde la costa hasta las cumbres de las montañas, incluyendo un desafiante ascenso al Monte Pico, que conduce a la cima de un volcán con piedras calientes en algunas áreas, lo que indica que no estaba completamente inactivo. También tuve la oportunidad de observar ballenas y delfines durante una excursión marítima. Después de eso, pasamos tiempo en Lisboa y Oporto, disfrutando de platos locales como los Pastéis de Belém, buñuelos de bacalao y el famoso vino de Oporto. La arquitectura única de estas ciudades, especialmente en sus distritos históricos con cambios significativos de elevación, me atrajo mucho.",

    // 🇫🇮 Finland
    exp_fl_title: "🇫🇮 Finlandia — Intercambio escolar",
    exp_fl_text: "Gracias a un amigo por correspondencia finlandés, pude pasar una semana en una escuela en Hyvinkää, a una hora de Helsinki, en 2016. Experimenté el sistema escolar finlandés, que es muy diferente al nuestro: las clases son más cortas y variadas (incluyendo clases de cocina, por ejemplo). Los estudiantes tienen mucha más libertad y están acostumbrados a reunirse después de la escuela para actividades como jugar en el bosque o practicar hockey. También visitamos los lugares emblemáticos de Helsinki y, en ferry, la capital de Estonia: Tallin. Este viaje, combinado con un curso intensivo de inglés, me ayudó a obtener mi certificación de Cambridge. Tuve que y pude practicar este idioma extensamente, encontrándome solo en una familia que no hablaba ni una sola palabra de francés.",

    // === Reflexión ===
    title_reflex: "Reflexión personal",
    exp_reflex: "Estas experiencias en el extranjero me han permitido desarrollar mucho más que simples competencias lingüísticas. Me han abierto a nuevas culturas, enseñado a adaptarme a entornos desconocidos y reforzado mi curiosidad tanto científica como humana. Cada viaje ha contribuido a construir mi visión del mundo y a alimentar mi ambición de ser un ingeniero abierto al ámbito internacional.",

    exp_culture_title: "🌍 Apertura cultural",
    exp_culture_text: "Comprender e integrarme en diferentes entornos me ha enseñado tolerancia, paciencia y escucha activa.",

    exp_adapt_title: "🤝 Adaptabilidad",
    exp_adapt_text: "Cada país me ha enfrentado a desafíos únicos, fortaleciendo mi capacidad de adaptarme rápidamente a nuevos contextos.",

    exp_vis_title: "🚀 Movilidad",
    exp_vis_text: "Estas experiencias alimentan mis ganas de trabajar en proyectos de alcance mundial, por eso me gustaría realizar un doble diploma (EPFL, UPM).",

    // === Compromiso cívico ===
    engagement_title: "Compromiso cívico",
    engagement_text: "Desarrollar competencias humanas y organizativas a través de experiencias enriquecedoras.",

    engagement_diving_title: "Supervisión deportiva",
    engagement_diving_text1: "🏊‍♂️ Club de buceo",
    engagement_diving_time: "⏱1 año",
    engagement_diving_text2: "Supervisión voluntaria de los entrenamientos de apnea, formación en técnicas de seguridad, sensibilización sobre la preservación de los ecosistemas marinos y ayuda durante los eventos (lotería, comidas, etc.).",
    skill_diving_1: "Organización",
    skill_diving_2: "Seguridad",
    skill_diving_3: "Liderazgo",

    engagement_basket_title: "Vida asociativa",
    engagement_basket_text1: "🏆 Club de baloncesto",
    engagement_basket_time: "⏱4 años",
    engagement_basket_text2: "Participación activa en la organización de eventos deportivos, coordinación de equipos y fomento del espíritu de equipo en un entorno competitivo.",

    engagement_delegate_title: "Representación estudiantil",
    engagement_delegate_text1: "📊 Delegado de promoción",
    engagement_delegate_time: "⏱2 años",
    engagement_delegate_text2: "Representación de los estudiantes, mediación entre la administración y los alumnos, organización de proyectos colectivos y mejora de la vida académica.",

    skill_basket_1: "Trabajo en equipo",
    skill_basket_2: "Organización",
    skill_basket_3: "Gestión de eventos",
    skill_delegate_1: "Mediación",
    skill_delegate_2: "Comunicación",
    skill_delegate_3: "Representación",

    // === Engineering Path ===
    ingenieur_hero_eyebrow: "Perfil",
    ingenieur_hero_title: "Estudiante de ingenieria en mecanica de fluidos orientado a simulacion numerica y soluciones aplicadas",
    ingenieur_hero_text: "Combino rigor cientifico, ejecucion practica y autonomia en proyectos para entregar soluciones fiables, medibles e implementables.",
    ingenieur_hero_cta_cv: "Ver CV",
    ingenieur_hero_cta_contact: "Contactarme",
    ingenieur_tag_1: "Mecanica de fluidos",
    ingenieur_tag_2: "CFD y metodos numericos",
    ingenieur_tag_3: "Diseno y prototipado 3D",
    ingenieur_tag_4: "Gestion de proyectos y comunicacion",
    ingenieur_kpi_1_value: "10+",
    ingenieur_kpi_1_label: "Proyectos tecnicos y academicos",
    ingenieur_kpi_2_value: "4",
    ingenieur_kpi_2_label: "Idiomas disponibles en el portfolio",
    ingenieur_kpi_3_value: "3",
    ingenieur_kpi_3_label: "Pilares clave: simulacion, codigo, diseno",
    ingenieur_kpi_4_value: "1",
    ingenieur_kpi_4_label: "Experiencia en Junior Empresa",
    ingenieur_intro_title: "Mi Trayectoria de Ingeniería",
    ingenieur_intro_text: "Aquí hay una descripción de mi primer contacto con el mundo científico, que me llevó hasta hoy, donde estoy en mi primer año de escuela de ingeniería.",
    ingenieu_premier_exp_title: "Primer Contacto con el Mundo Científico",
    ingenieur_premier_exp_text: "Durante el confinamiento por COVID-19, aprendí los conceptos básicos de JavaScript y desarrollo web a través de cursos en línea y mentores que respondían a mis preguntas. Estas habilidades fundamentales me permitieron desarrollar completamente este sitio web que muestra mi e-portafolio.",
    ingenieu_TIPE1_title: "Mi Primer Proyecto que Combina Conocimientos Teóricos y Prácticos",
    ingenieur_TIPE1_exp_text: "Mis dos primeros años en clases preparatorias me motivaron a desarrollar mi primer proyecto concreto: un objetivo de airsoft, moderadamente avanzado, basado en la automatización. Este proyecto me permitió adquirir conocimientos significativos en física y programación, ya que toda la parte de automatización se realizó exclusivamente utilizando Arduino.",
    ingenieu_TIPE2_title: "Mi Segundo Proyecto, Más Avanzado, Donde la Teoría y la Experimentación se Entrecruzan",
    ingenieur_TIPE2_exp_text: "Sin embargo, estoy más orgulloso de mi segundo proyecto TIPE. Estuve muy involucrado y trabajé con un preparador del laboratorio de mi escuela: Vincent STEINMETZ. Un hombre lleno de recursos que me enseñó mucho más en un año de lo que había aprendido por mi cuenta en dos. Construí, automatizé, calculé eficiencias y trabajé en la termodinámica de un sistema de aire acondicionado adiabático directo. Aprendí soldadura, electrónica, impresión 3D y mucho más.",
    ingenieur_year1_title: "Primer Año de Escuela de Ingeniería en ENSEEIHT",
    ingenieur_year1_text: "Introducción a los fundamentos científicos y técnicos en mecánica de fluidos, matemáticas e informática. Desarrollé mis conocimientos a través de trabajos prácticos, proyectos de estudio y proyectos grupales. Fortalecí mis bases en CAD, programación y mecánica. También descubrí la simulación numérica a través de CFD.",
    ingenieur_toolhead_title: "Diseño y Desarrollo de un Cabezal de Impresora 3D",
    ingenieur_toolhead_text: "Diseño de un cabezal de impresora 3D para un proyecto personal, incluyendo modelado 3D, simulación y ensamblaje mecánico. Decidí mejorar mi Ender3 modificando el cabezal de impresión para proporcionar una mejor refrigeración a la pieza impresa. También agregué un extrusor de accionamiento directo para mayor precisión y compatibilidad. Completé este proyecto agregando un sensor de fin de filamento y un 'cortador de filamento' para gestionar las impresiones multicolor.",
    ingenieur_3Dprintshop_title: "Diseño y Programación de una Tienda de Impresión 3D",
    ingenieur_3Dprintshop_text: "Desarrollo de una tienda de impresión 3D automatizada, integrando la gestión de pedidos, preparación de archivos de impresión y optimización del proceso de producción. Mi objetivo es lanzar este sitio vendiendo objetos diseñados e impresos por mí mismo, ya sean estéticos o funcionales. (En progreso)",
    ingenieur_projet_fortran_1_title: "Primer Contacto con el Lenguaje Fortran90",
    ingenieur_projet_fortran_1_text: "Junto con un compañero de clase, estudiamos la difusión de una concentración de contaminante en un curso de agua. El proyecto tenía como objetivo familiarizarnos con la estructura adecuada de los archivos. Este lenguaje es particularmente interesante porque es muy eficiente, especialmente para cálculos numéricos, y es ampliamente utilizado en el campo de la mecánica de fluidos.",
    ingenieur_projet_Fluent_title: "Proyectos de Simulación Numérica con Fluent",
    ingenieur_projet_Fluent_text: "He completado varios proyectos de simulación numérica utilizando el software Fluent. Estudié el flujo en una tubería, el flujo sobre una placa plana y el ala de un avión. Descubrí las diferentes etapas de la simulación numérica: modelado, mallado, resolución y análisis de resultados. También comparé los resultados obtenidos con datos experimentales o resultados teóricos, lo que me permitió comprendermejor los fenómenos físicos en juego. En el contexto de los métodos de diferencias finitas, entendí qué es la difusión numérica y cómo puede influir en los resultados de una simulación numérica, así como la convergencia de malla y tiempo.",
    ingenieur_projet_fortran_2_title: "Solución Numérica de un Problema de Advección-Difusión con Fortran90",
    ingenieur_projet_fortran_2_text: "Junto con un compañero de clase, estudiamos la solución numérica de un problema de advección-difusión utilizando el lenguaje Fortran90. Este proyecto nos permitió comprender mejor los métodos para resolver ecuaciones diferenciales parciales y aplicar este conocimiento a un problema concreto. El lenguaje Fortran90 también nos permitió realizar cálculos numéricos eficientes y precisos.",
    ingenieur_N7Consulting_title: "N7 Consulting",
    ingenieur_N7Consulting_text: "Tuve la oportunidad de convertirme en miembro administrador de la asociación N7 Consulting, una organización estudiantil en la escuela de ingeniería que brinda servicios de consultoría a empresas. Pude participar en la realización de misiones para clientes como la Agencia Espacial Europea, trabajando en proyectos innovadores y en estrecha colaboración con socios como Alten. También desarrollé mis habilidades en gestión de proyectos, comunicación y trabajo en equipo.",
    ingenieur_odyssee_nordique_title: "Creación de un Sitio Web de Exhibición para una Asociación",
    ingenieur_odyssee_nordique_text: "Creé un sitio web de exhibición para la asociación Odyssée Nordique, que presenta un documental que invita a reflexionar sobre el papel de las bicicletas en nuestro mundo. Apliqué mis habilidades de desarrollo web para crear un sitio atractivo y funcional que resalte las actividades de la asociación y facilite la comunicación con los miembros y socios. También me encargué de todo el SEO y alojamiento del sitio, lo que me permitió explorar diferentes opciones y elegir la mejor solución para satisfacer las necesidades de la asociación.",
    ingenieur_year2_title: "Segundo Año",
    ingenieur_year2_text: "Profundización de conocimientos en hidráulica, medio ambiente y proyectos grupales.",
    ingenieur_year3_title: "Tercer Año",
    ingenieur_year3_text: "Especialización y preparación para la pasantía final.",

    // == Professional Projects ==
    projet_texte: "Arquitectura Naval",
    pourquoi_texte: "¿Por qué este campo? Habiendo navegado durante mis vacaciones infantiles, siempre me han fascinado los veleros. También he visto barcos inmensos y poderosos durante los festivales marítimos de Brest en tres ocasiones. Es su arquitectura, funcionalidad y proceso de diseño lo que siempre me ha intrigado. Por eso decidí especializarme en este campo durante mi tercer año de escuela de ingeniería.",
    video_title: "Video de Presentación para CAM",
    presentation_video: "Aquí hay un video de presentación de mi formación y proyectos a través de entrevistas",
    projet_domaine: "Campo: Arquitectura Naval, I+D, Eficiencia Energética y Rendimiento de Barcos de Vela",

    person1_name: "Entrevistado 1: Clément Devouassoud",
    person1_age: "Edad: 26 años",
    person1_job: "Ocupación: ",
    person1_location: "Ubicación: Cluses, Francia",

    person2_name: "Entrevistado 2: Baptiste Renard",
    person2_age: "Edad: 30 años",
    person2_job: "Ocupación: Consultor independiente en marketing digital",
    person2_location: "Ubicación: Orléans, Francia",

    person3_name: "Entrevistado 3: Denis Lognon",
    person3_age: "Edad: 63 años",
    person3_job: "Ocupación: Ingeniero hidráulico jubilado",
    person3_location: "Ubicación: Labry, Francia",

    // == Activities ==
    voile_title: "Navegación",
    voile_texte: "Comencé a navegar muy temprano con el Optimist y luego continué con el catamarán. Este deporte me ha impulsado hacia esta carrera profesional.",

    rando_title: "Senderismo",
    rando_texte: "Realmente disfruto del senderismo y he hecho varias caminatas por montañas, la última fue el Tour des Aiguilles Rouges durante el verano de 2025.",

    photo_title: "Fotografía",
    photo_texte: "Lo que me encanta de la fotografía es capturar momentos, paisajes e instantes de vida.",

    cuisine_title: "Cocina",
    cuisine_texte: "Normalmente cocino para mis seres queridos en ocasiones especiales: Nochevieja, Navidad. Prefiero cocinar platos salados, pero también hago una muy buena tarta de nueces con caramelo.",

    impression_title: "Diseño e Impresión 3D",
    impression_texte: "Comencé la impresión 3D en 2023 con una Creality Ender 3, y luego continué con una Kingroon KP5L. Disfruté de la capacidad de dar vida a mis diseños a través de esta tecnología revolucionaria.",

    apnee_title: "Apnea",
    apnee_texte: "Siendo asmático, me incliné por la apnea en 2020. Me permitió explorar el mundo submarino y superarme tanto física como mentalmente.",

    basket_title: "Baloncesto",
    basket_texte: "Comencé a jugar baloncesto en 2012 y jugué en un club hasta 2021, cuando entrené con un equipo de N2: los Canonniers de Metz, aunque no participé en los partidos. Me encanta este deporte por su espíritu de equipo e intensidad. Estuve muy involucrado en mi primer club (Jura Dolois Basket), donde pasaba todos mis sábados arbitrando y gestionando la mesa de puntuación.",

    tennis_title: "Tenis",
    tennis_texte: "A la edad de 4 años, golpeé mi primera pelota. Jugué en un club, pero nunca competí mucho. Me encanta este deporte por la concentración y agilidad que requiere.",

    percussions_title: "Percusión",
    percussions_texte: "Criado en una familia de músicos, busqué un instrumento que me conveniera y encontré la percusión después de probar la trompeta, el saxofón y otros. Disfruté particularmente mis años en el Conservatorio Regional de Dole, porque se organizaron muchos eventos: batucadas, conciertos del conservatorio y más.",


    sd_title: "Desarrollo Sostenible y ODS",
    sd_subtitle: "Propuestas de compromiso cívico alineadas con los ODS de la UNESCO",
    pdf_view: "📄 Ver imagen completa",
    pdf_download: "⬇️ Descargar",
    pdf_note: "Infografía A4 vertical",
    project_title: "Proyecto: Reducción de la pobreza estudiantil",
    meta_objectives: "Objetivos",
    meta_objectives_desc: "Reducir la pobreza estudiantil en los diversos campus de Toulouse.",
    meta_team: "Equipo",
    meta_team_desc: "6 estudiantes - Módulos INP Toulouse: Coordinación, Comunicación, Logística",
    meta_duration: "Duración",
    meta_duration_desc: "1 año (enero - diciembre de 2024)",
    odd_title: "ODS de la UNESCO Objetivo",
    odd_6_title: "Fin de la pobreza",
    odd_6_desc: "Reducir la pobreza en nuestra ciudad, especialmente entre los estudiantes",
    odd_11_title: "Hambre cero",
    odd_11_desc: "Concienciar sobre la reducción del desperdicio de alimentos.",
    odd_12_title: "Salud y bienestar",
    odd_12_desc: "Distribuir productos necesarios a las personas necesitadas.",
    odd_14_title: "Reducción de las desigualdades",
    odd_14_desc: "Promover la inclusión social a través de talleres comunitarios.",
    impact_title: "Impacto medido",
    impact_waste: "Personas ayudadas",
    impact_points: "Puntos de recolección",
    impact_people: "Personas sensibilizadas",
    impact_workshops: "Talleres organizados",
    context_title: "Contexto del módulo CAM",
    context_desc: "Este proyecto se desarrolló como parte del Módulo 2 'Compromiso Cívico y Objetivos de Desarrollo Sostenible'. El objetivo era crear una propuesta de compromiso cívico alineada con al menos 3 ODS de la UNESCO, presentada en forma de infografía A4 y un discurso de 3 minutos."
  },

  cn: {
    title: "Yvan JACOB的电子作品集",
    main_title: "Yvan JACOB的电子作品集",
    menu_home: "首页",
    menu_activite: "体育及其他活动",
    menu_ingenieur: "工程课程",
    menu_exp: "流动性",
    menu_civic: "公民参与",
    menu_cv: "简历",
    intro_text: "我是Yvan JACOB，ENSEEIHT（流体力学 - 水 - 环境）的一年级学生。在这里，你可以发现我的教育和经历。如果你有任何问题，请随时使用联系表格。",

    filter_travail_label: "工作",
    filter_vacances_label: "假期",
    filter_echange_label: "学校交流",

    // 🇫🇷 France
    exp_fr_title: "🇫🇷 法国 — 夏季工作",
    exp_fr_text: "在2024年夏天，我决定在一家工厂的生产线上工作6周。这段经历让我首次接触到了职场，并帮助我更好地理解了工人们所面临的技能和挑战。我发现了一个完整的生态系统，里面的同事们都很乐意团队合作。",

    // 🇹🇿 Tanzania
    exp_tz_title: "🇹🇿 坦桑尼亚 — 假期",
    exp_tz_text: "2019年，我和家人一起去了坦桑尼亚旅行，我们探索了当地的野生动物和文化。尽管马赛文化与我们的文化有很大差异，但我们有机会见到了部落成员，并通过他们丰富的手工艺品和狩猎方法分享了许多发现的时刻。我有幸在自然公园进行野生动物园之旅，体验了桑给巴尔截然不同的文化。",
    pres_tz: "我在坦桑尼亚旅行的简要介绍（PDF）",

    // 🇨🇳 China
    exp_cn_title: "🇨🇳 中国 — 假期",
    exp_cn_text: "2017年夏天，我的父母带我去了中国三周。我们游历了整个国家，发现了无数的民族群体和不同的文化。从北京的胡同到令人惊叹的拉卜楞寺，一切都在变化：方言、饮食习惯和建筑风格。风景尤为壮观：从不可征服的中国长城到张掖丹霞的彩色山脉，再到西安的兵马俑。",

    // 🇪🇨 Équateur
    exp_ed_title: "🇪🇨 厄瓜多尔 — 假期",
    exp_ed_text: "2018年，我有幸前往厄瓜多尔旅行。我们探索了该国的各种气候：亚马逊的心脏地带、陡峭的科托帕希山坡以及加拉帕戈斯群岛无与伦比的生物多样性。最令人惊叹的是，我们能够从独木舟上瞥见一些非常偏远的部落，他们在恶劣的条件下和平地生活。随后，我们发现了加拉帕戈斯群岛，这些火山岛屿拥有丰富的生物多样性，我在那里与鲨鱼、海龟和海鬣蜥一起游泳。我还在这些岛屿的各种火山和火山口上进行了大量徒步旅行。",

    // 🇨🇱 Chile
    exp_cl_title: "🇨🇱 智利 — 假期",
    exp_cl_text: "2022年，我全家一起享受了一次智利之旅。我从北到南游历了这个国家，发现了它多样的气候——从安第斯山脉开始，经过阿塔卡马沙漠，最终到达巴塔哥尼亚的峡湾及其令人印象深刻的冰川。我有机会在极端条件下划皮划艇，探索我从未想过会看到的风景。瓦尔帕莱索市以其色彩斑斓的房屋和巴勃罗·聂鲁达独特的历史故居而闻名，我认为这是该国必看的地方。然后，我们穿越太平洋，发现了复活节岛及其著名的摩艾石像，这些石像周围环绕着迷人的文化和神话。",

    // 🇮🇳 India
    exp_in_title: "🇮🇳 印度 — 假期",
    exp_in_text: "我去过印度两次。第一次是在2016年，我的第一次重大旅行，我们探索了拉贾斯坦邦，它的宫殿和堡垒。寺庙以及不同宗教（印度教和耆那教）的实践方式给我留下了深刻印象（后者旨在避免杀死任何生物）。第二次是在2023年，重点是东部和东南部：在班加罗尔公园寻找孟加拉虎和世界上最大的红树林——松德班斯。在这两次旅行中，当地人给我留下了深刻印象。尽管贫困普遍存在，但居民们总是面带微笑，热情好客，衣着整洁（通常穿着熨烫得很好的衬衫）。",

    // 🇦🇨 Azores
    exp_ac_title: "🇦🇨 亚速尔群岛 — 假期",
    exp_ac_text: "在2021年的COVID-19危机期间，我们决定去亚速尔群岛度假，这是一个位于大西洋中部的葡萄牙群岛。我们发现了火山景观、火山口湖泊和郁郁葱葱的森林。我在各种不同的地方徒步旅行，从海边到山顶，包括一次具有挑战性的攀登皮库山，这是一座火山的顶峰，有些地方有热石，表明它并非完全休眠。我还在一次海上游览中有机会观察鲸鱼和海豚。之后，我们在里斯本和波尔图度过了一段时间，享受当地美食，如贝伦蛋挞、鳕鱼丸和著名的波特酒。这些城市独特的建筑风格，尤其是在历史街区，地势起伏较大，非常吸引我。",

    // 🇫🇮 Finland
    exp_fl_title: "🇫🇮 芬兰 — 学校交流",
    exp_fl_text: "感谢一位芬兰笔友，我得以在2016年在赫尔辛基一小时车程外的Hyvinkää的一所学校度过一周。我体验了芬兰的学校系统，这与我们的系统有很大不同：课程更短且多样化（例如包括烹饪课）。学生们有更多的自由，习惯于放学后聚在一起进行活动，如在森林中玩耍或练习曲棍球。我们还参观了赫尔辛基的地标建筑，并乘渡轮前往爱沙尼亚首都塔林。这次旅行，加上强化英语课程，帮助我获得了剑桥认证。我不得不并且能够广泛练习这种语言，因为我发现自己独自一人在一个不讲法语的家庭中。",

    // === 反思 ===
    title_reflex: "个人反思",
    exp_reflex: "这些海外经历让我收获的不仅是语言能力。它们让我接触到新的文化，学会适应陌生环境，并增强了我的科学与人文好奇心。每一次旅行都塑造了我的世界观，并激发了我作为一名开放、国际化工程师的志向。",

    exp_culture_title: "🌍 文化开放",
    exp_culture_text: "理解并融入不同的环境让我学会了宽容、耐心和积极倾听。",

    exp_adapt_title: "🤝 适应能力",
    exp_adapt_text: "每个国家都带来了独特的挑战，加强了我快速适应新环境的能力。",

    exp_vis_title: "🚀 流动性",
    exp_vis_text: "这些经历激发了我参与具有全球影响力项目的愿望，因此我希望攻读双学位（EPFL，UPM）",

    // === 公民参与 ===
    engagement_title: "公民参与",
    engagement_text: "通过丰富的经历培养人际与组织能力。",

    engagement_diving_title: "体育指导",
    engagement_diving_text1: "🏊‍♂️ 潜水俱乐部",
    engagement_diving_time: "⏱1 年",
    engagement_diving_text2: "志愿指导自由潜水训练，教授安全技术，提高对海洋生态系统保护的意识，并在各类活动（抽奖、聚餐等）中提供协助。",
    skill_diving_1: "组织能力",
    skill_diving_2: "安全",
    skill_diving_3: "领导力",

    engagement_basket_title: "社团活动",
    engagement_basket_text1: "🏆 篮球俱乐部",
    engagement_basket_time: "⏱4 年",
    engagement_basket_text2: "积极参与体育赛事的组织、团队协调，并在竞争环境中培养团队精神。",

    engagement_delegate_title: "学生代表",
    engagement_delegate_text1: "📊 班级代表",
    engagement_delegate_time: "⏱2 年",
    engagement_delegate_text2: "代表学生与行政部门沟通，协调同学意见，组织集体项目，改善学术生活。",

    skill_basket_1: "团队合作",
    skill_basket_2: "组织能力",
    skill_basket_3: "活动管理",
    skill_delegate_1: "调解能力",
    skill_delegate_2: "沟通能力",
    skill_delegate_3: "代表性",


    // === Engineering Path ===
    ingenieur_hero_eyebrow: "个人简介",
    ingenieur_hero_title: "流体力学方向工程学生，专注数值模拟与可落地解决方案",
    ingenieur_hero_text: "我结合科学严谨性、实践执行力和项目自主性，交付可靠、可量化、可部署的解决方案。",
    ingenieur_hero_cta_cv: "查看简历",
    ingenieur_hero_cta_contact: "联系我",
    ingenieur_tag_1: "流体力学",
    ingenieur_tag_2: "CFD与数值方法",
    ingenieur_tag_3: "3D设计与原型",
    ingenieur_tag_4: "项目管理与沟通",
    ingenieur_kpi_1_value: "10+",
    ingenieur_kpi_1_label: "技术与学术项目",
    ingenieur_kpi_2_value: "4",
    ingenieur_kpi_2_label: "作品集可用语言",
    ingenieur_kpi_3_value: "3",
    ingenieur_kpi_3_label: "核心支柱：仿真、代码、设计",
    ingenieur_kpi_4_value: "1",
    ingenieur_kpi_4_label: "Junior-Entreprise经历",
    ingenieur_intro_title: "我的工程师之路",
    ingenieur_intro_text: "以下是我与科学世界的首次接触的描述，这段经历一直持续到今天，我现在是一名工程学院的一年级学生。",
    ingenieu_premier_exp_title: "与科学世界的首次接触",
    ingenieur_premier_exp_text: "在COVID-19封锁期间，我通过在线课程和回答我问题的导师学习了JavaScript和网页开发的基础知识。这些基础技能使我能够完全开发出展示我的电子作品集的网站。",
    ingenieu_TIPE1_title: "我第一个结合理论和实践知识的项目",
    ingenieur_TIPE1_exp_text: "我在预科班的前两年激励我开发了我的第一个具体项目：一个中等复杂的气枪靶，基于自动化。这个项目让我在物理和编程方面获得了显著的知识，因为整个自动化部分完全使用Arduino完成。",
    ingenieu_TIPE2_title: "我的第二个更先进的项目，理论与实验的交汇点",
    ingenieur_TIPE2_exp_text: "然而，我最自豪的是我的第二个TIPE项目。我非常投入，并与我学校实验室的一位预备员Vincent STEINMETZ合作。他是一个足智多谋的人，在一年内教会了我比我自己两年学到的还要多。我建造、自动化、计算效率，并研究了直接绝热空调系统的热力学。我学会了焊接、电子学、3D打印等等。",
    ingenieur_year1_title: "ENSEEIHT工程学院第一年",  
    ingenieur_year1_text: "介绍流体力学、数学和计算机科学的科学和技术基础。我通过实践工作、学习项目和小组项目来发展我的知识。加强了我在CAD、编程和机械方面的基础。我还通过CFD发现了数值模拟。",
    ingenieur_toolhead_title: "3D打印机头的设计与开发",
    ingenieur_toolhead_text: "设计一个3D打印机头用于个人项目，包括3D建模、仿真和机械组装。我决定通过修改Ender3的打印头来改善我的Ender3，为打印件提供更好的冷却。我还添加了一个直接驱动挤出机以提高精度和兼容性。我通过添加一个断丝传感器和一个“切丝器”来完成这个项目，以管理多色打印。",
    ingenieur_3Dprintshop_title: "3D打印店的设计与编程",
    ingenieur_3Dprintshop_text: "开发一个自动化的3D打印店，整合订单管理、打印文件准备和生产过程优化。我的目标是通过销售我自己设计和打印的物品来启动这个网站，无论是美观还是功能性的。（进行中）",
    ingenieur_projet_fortran_1_title: "与Fortran90语言的首次接触",
    ingenieur_projet_fortran_1_text: "与一位同学一起，我们研究了水体中污染物浓度的扩散。该项目旨在让我们熟悉文件的正确结构。这种语言特别有趣，因为它非常高效，尤其适用于数值计算，并且在流体力学领域得到广泛使用。",
    ingenieur_projet_Fluent_title: "使用Fluent进行数值模拟项目",
    ingenieur_projet_Fluent_text: "我完成了几个使用Fluent软件的数值模拟项目。我研究了管道中的流动、平板上的流动和飞机翼上的流动。我发现了数值模拟的不同阶段：建模、网格划分、求解和结果分析。我还将获得的结果与实验数据或理论结果进行了比较，这让我更好地理解了涉及的物理现象。在有限差分方法的背景下，我了解了什么是数值扩散以及它如何影响数值模拟的结果，以及网格和时间的收敛性。",
    ingenieur_projet_fortran_2_title: "使用Fortran90解决一个对流-扩散问题的数值解",
    ingenieur_projet_fortran_2_text: "与一位同学一起，我们研究了使用Fortran90语言解决一个对流-扩散问题的数值解。这个项目让我们更好地理解了解决偏微分方程的方法，并将这些知识应用于一个具体问题。Fortran90语言还使我们能够进行高效和精确的数值计算。",
    ingenieur_N7Consulting_title: "N7 Consulting",
    ingenieur_N7Consulting_text: "我有机会成为工程学院学生组织N7 Consulting的管理成员，该组织为企业提供咨询服务。我参与了为客户如欧洲航天局执行任务的工作，在与Alten等合作伙伴密切合作的创新项目中工作。我还发展了我的项目管理、沟通和团队合作技能。",
    ingenieur_odyssee_nordique_title: "为协会创建展示网站",
    ingenieur_odyssee_nordique_text: "我为Odyssée Nordique协会创建了一个展示网站，该协会展示了一个邀请人们反思自行车在我们世界中的作用的纪录片。我应用了我的网页开发技能，创建了一个吸引人且功能齐全的网站，突出协会的活动，并促进与成员和合作伙伴的沟通。我还负责整个网站的SEO和托管，这让我能够探索不同的选项并选择最适合满足协会需求的方案。",
    ingenieur_year2_title: "第二年",
    ingenieur_year2_text: "深化水力学、环境和小组项目的知识。",
    ingenieur_year3_title: "第三年",
    ingenieur_year3_text: "专业化和为最终实习做准备。",

    // == Professional Projects ==
    projet_texte: "船舶建筑",
    pourquoi_texte: "为什么选择这个领域？由于我在童年假期期间航行，我一直对帆船着迷。我还在布雷斯特海事节上三次见过巨大的强大船只。正是它们的建筑、功能和设计过程一直让我着迷。这就是为什么我决定在工程学院的第三年专攻这个领域。",
    video_title: "CAM的介绍视频",
    presentation_video: "这是通过采访介绍我的背景和项目的视频",
    projet_domaine: "领域：船舶建筑、研发、能源效率和帆船性能",

    person1_name: "受访者1：Clément Devouassoud",
    person1_age: "年龄：26岁",
    person1_job: "职业：",
    person1_location: "地点：法国Cluses",

    person2_name: "受访者2：Baptiste Renard",
    person2_age: "年龄：30岁",
    person2_job: "职业：独立数字营销顾问",
    person2_location: "地点：法国奥尔良",

    person3_name: "受访者3：Denis Lognon",
    person3_age: "年龄：63岁",
    person3_job: "职业：退休水利工程师",
    person3_location: "地点：法国Labry",

    // == Activities ==
    voile_title: "航海",
    voile_texte: "我很小的时候就开始用乐观号帆船航行，后来继续玩双体船。这项运动推动我走上了这条职业道路。",

    rando_title: "徒步旅行",
    rando_texte: "我非常喜欢徒步旅行，已经进行过几次山区徒步旅行，最近一次是在2025年夏天的红针环线。",

    photo_title: "摄影",
    photo_texte: "我喜欢摄影，因为它能捕捉到瞬间、风景和生活的片段。",

    cuisine_title: "烹饪",
    cuisine_texte: "我通常在特殊场合为我所爱的人做饭：新年前夜、圣诞节。我更喜欢做咸味菜肴，但我也会做非常好的焦糖核桃挞！",

    impression_title: "3D设计和打印",
    impression_texte: "我在2023年开始使用Creality Ender 3进行3D打印，后来又使用了Kingroon KP5L。我喜欢通过这项革命性技术将我的设计变为现实的能力。",

    apnee_title: "自由潜水",
    apnee_texte: "由于我患有哮喘，我在2020年转向了自由潜水。这让我能够探索水下世界，并在身体和心理上挑战自己。",

    basket_title: "篮球",
    basket_texte: "我在2012年开始打篮球，并在一个俱乐部打球直到2021年，当时我在N2队训练：梅斯的Canonniers，尽管我没有参加比赛。我喜欢这项运动的团队精神和强度。我在我的第一个俱乐部（Jura Dolois Basket）非常投入，每个星期六都在那里当裁判和管理记分台。",

    tennis_title: "网球",
    tennis_texte: "我4岁时打了我的第一球。我在一个俱乐部打球，但从未参加过太多比赛。我喜欢这项运动，因为它需要集中注意力和敏捷性。",

    percussions_title: "打击乐",
    percussions_texte: "我在一个音乐世家长大，寻找适合我的乐器，并在尝试了小号、萨克斯等乐器后找到了打击乐。我特别喜欢我在多尔地区音乐学院的那些年，那里组织了许多活动：巴图卡达、音乐学院音乐会等等。",

    sd_title: "可持续发展与联合国可持续发展目标",
    sd_subtitle: "与联合国教科文组织可持续发展目标一致的公民参与提案",
    pdf_view: "📄 查看完整图像",
    pdf_download: "⬇️ 下载",
    pdf_note: "A4纵向信息图",
    project_title: "项目：减少塑料废物",
    meta_objectives: "目标",
    meta_objectives_desc: "减少图卢兹各校园的学生贫困。",
    meta_team: "团队",
    meta_team_desc: "6名学生 - 图卢兹INP模块：协调、沟通、物流",
    meta_duration: "持续时间",
    meta_duration_desc: "1年（2024年1月-12月）",
    odd_title: "联合国教科文组织可持续发展目标",
    odd_6_title: "消除贫困",
    odd_6_desc: "减少我们城市，特别是学生中的贫困现象",
    odd_11_title: "零饥饿",
    odd_11_desc: "提高对减少食物浪费的认识。",
    odd_12_title: "健康与福祉",
    odd_12_desc: "向有需要的人分发必要的产品。",
    odd_14_title: "减少不平等",
    odd_14_desc: "通过社区工作坊促进社会包容。",
    impact_title: "衡量影响",
    impact_waste: "受助人数",
    impact_points: "收集点",
    impact_people: "提高意识的人数",
    impact_workshops: "组织的工作坊",
    context_title: "CAM模块背景",
    context_desc: "该项目作为“公民参与与可持续发展目标”模块的一部分开发。目标是创建一个与联合国教科文组织至少3个可持续发展目标一致的公民参与提案，并以A4信息图和3分钟演讲的形式呈现。"
  }
};


// ======================
// Associer chaque langue à un PDF
// ======================
const cvFiles = {
  fr: "cv/CV_Francais.pdf",
  en: "cv/CV_English.pdf",
  es: "cv/CV_Espanol.pdf",
  cn: "cv/CV_Chinese.pdf"
};


// ======================
// Fonction pour changer la langue
// ======================
function setLanguage(lang) {
  const t = translations[lang] || translations.fr;

  // Traduire tous les éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  const cvFrame = document.getElementById("cvFrame");
  if (cvFrame) {
    // Mettre à jour l'attribut data-src avec le bon PDF selon la langue
    cvFrame.dataset.src = cvFiles[lang] || cvFiles.fr;

    // Verrouillage supprimé: toujours charger le CV correspondant à la langue
    cvFrame.src = cvFrame.dataset.src;
  }

  // Traduire les labels des filtres
  const filterMap = {
    "filter-travail": "filter_travail_label",
    "filter-vacances": "filter_vacances_label",
    "filter-echange": "filter_echange_label"
  };
  Object.entries(filterMap).forEach(([id, key]) => {
    const checkbox = document.getElementById(id);
    if (checkbox && t[key]) {
      const label = checkbox.parentElement;
      const textNode = Array.from(label.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.textContent = " " + t[key];
    }
  });

  document.title = t.title || document.title;
  localStorage.setItem("preferredLang", lang);
}

function revealSensitiveData() {
  document.querySelectorAll(".sensitive").forEach(el => {
    if (el.dataset.value !== undefined) {
      el.textContent = el.dataset.value;
    }
  });
}

// ======================
// Initialisation DOM
// ======================
document.addEventListener("DOMContentLoaded", () => {

  initMobileMenu(); // Ajouter cette ligne en premier
  initVideoHover(); 
  const savedLang = localStorage.getItem("preferredLang") || "fr";
  const cvFrame = document.getElementById("cvFrame");
  

  if (cvFrame) {
    cvFrame.dataset.src = cvFiles[savedLang] || cvFiles.fr;
  }
  
  setLanguage(savedLang);
  // Drapeaux pour changer la langue
  document.querySelectorAll(".flag").forEach(flag => {
    flag.addEventListener("click", () => {
      setLanguage(flag.dataset.lang);
    });
  });

  // Appliquer les filtres pins si présents
  applyFilters();
  ["filter-travail", "filter-vacances", "filter-echange"].forEach(id => {
    const checkbox = document.getElementById(id);
    if (checkbox) checkbox.addEventListener("change", applyFilters);
  });

  // Initialiser les modales
  initModals();

  // Initialiser le formulaire contact
  initContactForm();

  // Date dernière modification
  const lastModifiedEl = document.getElementById("lastModified");
  if(lastModifiedEl){
    const date = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastModifiedEl.textContent = date.toLocaleDateString('fr-FR', options);
  }

  // Verrouillage supprimé: afficher directement les infos sensibles
  revealSensitiveData();
});

// ======================
// Filtres pins + timeline
// ======================
function applyFilters() {
  const showTravail = document.getElementById("filter-travail")?.checked ?? true;
  const showVacances = document.getElementById("filter-vacances")?.checked ?? true;
  const showEchange = document.getElementById("filter-echange")?.checked ?? true;

  document.querySelectorAll(".pin, .experience-detail").forEach(el => {
    const typeTravail = el.classList.contains("type-travail");
    const typeVacances = el.classList.contains("type-vacances");
    const typeEchange = el.classList.contains("type-echange");
    el.style.display = (typeTravail && showTravail) || (typeVacances && showVacances) || (typeEchange && showEchange) ? "block" : "none";
  });
}

// ======================
// Défilement experiences
// ======================

document.querySelectorAll('.circle-carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images[index].style.opacity = 0; // cache l’image courante
    index = (index + 1) % images.length; // passe à la suivante
    images[index].style.opacity = 1; // affiche la suivante
  }, 2500); // toutes les 2,5 secondes
});


// ======================
// Modales
// ======================
function initModals(){
  document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.dataset.modal;
      const modal = document.getElementById(modalId);
      if(modal) modal.style.display = "block";
    });
  });

  document.querySelectorAll(".modal .close").forEach(span => {
    span.addEventListener("click", () => {
      span.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    document.querySelectorAll(".modal").forEach(modal => {
      if(e.target === modal) modal.style.display = "none";
    });
  });
}


// ======================
// Configuration reCAPTCHA
// ======================
const RECAPTCHA_SITE_KEY = "6LfP0eIrAAAAAPsnFrOwBRe19oy9bfHdKAvgu8T1";
const RECAPTCHA_SECRET_KEY = "6LfP0eIrAAAAAOvr2IlopKErVAg7mLTpzmxC6h_C";

// ======================
// Formulaire contact avec reCAPTCHA
// ======================
function initContactForm(){
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const recaptchaError = document.getElementById("recaptcha-error");
  
  if(!contactForm || !formStatus) return;

  contactForm.addEventListener("submit", async function(e){
    e.preventDefault();

    // Réinitialiser les messages d'erreur
    formStatus.textContent = "";
    recaptchaError.style.display = "none";

    // Vérifier reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      recaptchaError.style.display = "block";
      formStatus.style.color = "red";
      formStatus.textContent = "Veuillez compléter la vérification reCAPTCHA.";
      return;
    }

    // Désactiver le bouton pendant l'envoi
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours...";

    try {
      // Vérifier reCAPTCHA côté serveur (optionnel mais recommandé)
      const isHuman = await verifyRecaptcha(recaptchaResponse);
      
      if (!isHuman) {
        throw new Error("Échec de la vérification reCAPTCHA");
      }

      // Envoyer l'email via EmailJS
      await emailjs.sendForm('service_kebxxpt', 'template_t311c3h', this);

      formStatus.style.color = "green";
      formStatus.textContent = "Message envoyé avec succès !";
      contactForm.reset();
      
      // Réinitialiser reCAPTCHA
      grecaptcha.reset();

    } catch (error) {
      console.error("Erreur:", error);
      formStatus.style.color = "red";
      
      if (error.text === "Failed to verify reCAPTCHA") {
        formStatus.textContent = "Échec de la vérification de sécurité. Veuillez réessayer.";
      } else {
        formStatus.textContent = "Une erreur est survenue, réessayez plus tard.";
      }
      
      // Réinitialiser reCAPTCHA en cas d'erreur
      grecaptcha.reset();
    } finally {
      // Réactiver le bouton
      submitBtn.disabled = false;
      submitBtn.textContent = "Envoyer";
    }
  });
}

// ======================
// Vérification reCAPTCHA côté serveur (optionnel)
// ======================
async function verifyRecaptcha(recaptchaResponse) {
  try {
    const response = await fetch('/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recaptchaResponse: recaptchaResponse
      })
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Erreur vérification reCAPTCHA:", error);
    // En cas d'erreur, on accepte quand même pour ne pas bloquer l'utilisateur
    return true;
  }
}

// Ajouter ou retirer la classe 'scrolled' quand on descend
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ======================
// Animation activite
// ======================
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.activity-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');   // carte visible → glisse vers sa place
      } else {
        entry.target.classList.remove('in-view'); // carte hors viewport → glisse hors
      }
    });
  }, {
    threshold: 0.2 // déclenche quand 20% de la carte est visible
  });

  cards.forEach(card => {
    observer.observe(card);
  });
});

// ======================
// Gestion du menu mobile
// ======================
function initMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;

    // Créer le bouton hamburger
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Menu');
    
    // Insérer le hamburger dans la navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(hamburger);
    }

    // Gérer le clic sur le hamburger
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('open');
        hamburger.innerHTML = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
            navMenu.classList.remove('open');
            hamburger.innerHTML = '☰';
        }
    });

    // Fermer le menu en cliquant sur un lien
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('open');
            hamburger.innerHTML = '☰';
        }
    });
}

// Contrôle des vidéos au survol
function initVideoHover() {
  const percussionCard = document.querySelector('.percussion-card');
  
  if (!percussionCard) return;
  
  const video = percussionCard.querySelector('.hover-video');
  
  // Démarrer la vidéo au survol
  percussionCard.addEventListener('mouseenter', () => {
    if (video.paused) {
      video.play().catch(e => console.log("Autoplay prevented:", e));
    }
  });
  
  // Mettre en pause quand on quitte
  percussionCard.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Revenir au début
  });
  
  // Pour mobile : toucher pour jouer
  percussionCard.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (video.paused) {
      video.play();
      video.controls = true; // Afficher les contrôles sur mobile
    } else {
      video.pause();
      video.controls = false;
    }
  });
}

function initPercussionVideo() {
  const percussionCard = document.querySelector('.percussion-card');
  const video = percussionCard.querySelector('.percussion-video');
  
  percussionCard.addEventListener('mouseenter', () => {
    video.play();
  });
  
  percussionCard.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
}

document.addEventListener('DOMContentLoaded', initPercussionVideo);
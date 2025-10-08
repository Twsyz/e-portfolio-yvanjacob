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
    menu_activite: "Autres activités",
    menu_ingenieur: "Parcours ingénieur",
    menu_projet:"Projets professionnels",
    menu_exp: "Expériences professionnelles, internationales et civiques",
    menu_cv: "CV",
    intro_text: "Moi, c'est Yvan JACOB, je suis étudiant à l'ENSEEIHT (Mécanique des fluides – Eau – Environnement) en première année. Vous pouvez découvrir ici mon parcours, mes expériences mais aussi mon projet professionnel. Si vous avez une quelconque question, vous pouvez passer par le formulaire de contact.",

    filter_travail_label: "Travail",
    filter_vacances_label: "Vacances",
    filter_echange_label: "Échange scolaire",
    // 🇫🇷 France
    exp_fr_title: "🇫🇷 France — Travail d'été",
    exp_fr_text: "Durant l'été 2024, j'ai décidé de travailler 6 semaines dans une usine, sur chaîne de production. Cela m'a permis d'avoir une première approche du monde du travail mais aussi de mieux comprendre les compétences et les enjeux d'un ouvrier. J'ai plus précisément découvert tout un écosystème avec des collègues heureux de travailler en équipe.",

    // 🇹🇿 Tanzanie
    exp_tz_title: "🇹🇿 Tanzanie — Vacances",
    exp_tz_text: "En 2019, j'ai effectué un voyage en famille en Tanzanie, où nous avons pu découvrir la faune et la culture locale. En effet, malgré les différences entre la culture Maasaï et la notre, nous avons pu rencontrer des membres de tribu et partager des moments de découvertes notamment de leurs nombreux artisinats et méthodes de vies dont la chasse. J'ai eu la chance de passer du safari dans les parcs naturels, à la culture très différente de Zanzibar.",
    pres_tz: "Petite présentation de mon voyage en Tanzanie (PDF)",

    // 🇨🇳 Chine
    exp_cn_title: "🇨🇳 Chine — Vacances",
    exp_cn_text: "Mes parents m'ont emmené en Chine, 3 semaines de l'été 2017, nous avons voyagé à travers le pays et découvert un nombre inimaginable d'ethnies et donc de cultures différentes. En partant des hutong de Pékin, jusqu'aux décivilisants Monastères de Labrang, tout variait: les dialectes, les habitudes alimentaires mais aussi l'architecture. Les paysages étaient des plus marquants: de l'indomptable muraille de Chine, aux montagnes colorées de Zhangye Danxia, en passant par l'armée de terre cuite de Xi'an.",

    // 🇪🇨 Équateur
    exp_ed_title: "🇪🇨 Équateur — Vacances",
    exp_ed_text: "J'ai eu la chance, en 2018, de partir en Equateur. Nous avons découvert tous les climats du pays: le coeur de l'Amazonie, les pentes étriquées du Cotopaxi mais aussi la biodiversité sans égal des îles Galapagos. Le plus étonnant, selon moi, reste la présence de tribus très réculées, que l'on a pu apercevoir depuis la pirogue, vivant de manière si paisible dans des conditions pourtant hostiles. Nous avons ensuite découvert les îles galapgos, ces îles volcaniques, riches en biodiveristé, où j'ai pu nager avec des requins, des tortues et des iguanes marins. J'ai aussi fait beaucoup de randonnée sur les différents volcans et caldeiras de ces îles.",

    // 🇨🇱 Chili
    exp_cl_title: "🇨🇱 Chili — Vacances",
    exp_cl_text: "En 2022, toute la famille a profité d'un séjour au Chili. J'ai traversé le pays du nord au sud, découvrant les climats pluriels de ce pays cotier - commençant par la cordillère des Andes, en passant par le désert d'Atacama, jusqu'aux fjords de Patagonie et ses impressionants glaciers. J'ai pu faire du kayak dans des conditions extrêmes pour découvrir des paysages que jamais je n'aurais pensé voir. La ville de Valparaiso avec ses maisons colorées et la maison historique mais aussi atypique de Pablo Neruda sont selon-moi des incontournables du pays. Nous avons après traversé l'océan Pacifique pour découvrir l'île de Pâques et ses célèbres Moaïs entourés d'une culture et de mythes passionnants.",

    // 🇮🇳 Inde
    exp_in_title: "🇮🇳 Inde — Vacances",
    exp_in_text: "J'ai pu visité à deux reprises l'Inde. La première fois, en 2016: mon premier grand voyage, nous avons découvert le Rajasthan, ses palais et ses forts. Les temples et la façon dont les différentes religions, l'hindouisme et le jaïnisme, sont pratiquées m'a particulièrement marqué (ce dernier visant à ne tuer aucun être vivant). La deuxième fois, en 2023, le voyage visait à découvrir l'est et le sud-est: à la recherche du tigre du Bengale dans le parc de Bangalore et dans la plus grande mangrove du monde: Le Sundarbans. Durant ces deux voyages, la population était une des bonnes surprises. Malgré une pauvreté très présente, les habitants sont toujours souriants, accueillants et propres sur eux (souvent habillés d'une chemise bien repassée).",

    // 🇦🇨 Açores
    exp_ac_title: "🇦🇨 Açores — Vacances",
    exp_ac_text: "Pendant la crise du covid 19, en 2021, nous avons décidé de partir en vacances aux Açores, archipel portugais au milieu de l'océan Atlantique. Nous avons découvert des paysages volcaniques, des lacs de cratères mais aussi des forêts luxuriantes. J'ai pu faire de la randonnée dans des endroits très variés, allant du bord de mer jusqu'au sommet des montagnes: notamment une ascencion difficile et rigoureuse du mont Pico, menant au sommet d'un volcan dont les pierres, brûlantes par endroit, rappellent un volcan pas totalement endormi. J'ai aussi eu la chance d'observer des baleines et des dauphins lors d'une sortie en mer. Après cela, nous avons fait un séjour à Lisbonne et à Porto, découvrants les mets locaux tels que les pasteis de Bélem, les accras de morue ou bien le fameux vin de Porto. L'architecture particulière de ces villes, dans les quartiers historiques et leur dénivelé important, m'ont beaucoup plu.",

    // 🇫🇮 Finlande
    exp_fl_title: "🇫🇮 Finlande — Échange scolaire",
    exp_fl_text: "Grâce à un correspondant finlandais, j'ai pu, en 2016, partir une semaine dans une école à Hyvinkää, à une heure d'Helsinki. J'ai pu découvrir le système scolaire finlandais, très différent du notre: les cours sont plus courts et différents (cours de cuisine par exemple). Les élèves ont beaucoup plus de liberté, ils ont l'habitude de se retrouver entre la fin des cours et les diners pour jouer dans les sous-bois ou pratiquer le hockey. Nous avons aussi pu visité les monuments de Helsinki. Et, grâce à un ferry, la capitale de l'Estonie: Tallin. Ce voyage, couplé à un stage intensif d'anglais, m'a permis d'obtenir ma certification Cambridge. En effet, j'ai du et pu énormément pratiquer cette langue, me retrouvant seul dans une famille qui ne parlait pas un seul mot de français.",

    // === Réfléxion ===
    title_reflex: "Réflexion personnelle",
    exp_reflex: " Ces expériences à l’étranger m’ont permis de développer bien plus que de simples compétences linguistiques. Elles m’ont ouvert à de nouvelles cultures, appris à m’adapter à des environnements inconnus et renforcé ma curiosité scientifique et humaine. Chaque voyage a contribué à construire ma vision du monde et à nourrir mon ambition d’ingénieur ouvert sur l’international.",

    exp_culture_title: "🌍Ouverture culturelle",
    exp_culture_text: "Comprendre et m’intégrer à des environnements variés m’a appris la tolérance, la patience et l’écoute active.",

    exp_adapt_title: "🤝 Adaptabilité",
    exp_adapt_text: "Chaque pays m’a confronté à des défis uniques, renforçant ma capacité à m’adapter rapidement à de nouveaux contextes.",

    exp_vis_title: "🚀Mobilités",
    exp_vis_text: "Ces expériences nourrissent mon envie de travailler sur des projets à portée mondiale, c'est pourquoi j'aimerai faire un double-diplôme (EPFL, UPM)",

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
    ingenieur_intro_title: "Mon parcours d’ingénieur",
    ingenieur_intro_text: "Ici est décrit mon premier contact avec le monde scientifique, jusqu'aujourd'hui où je suis en première année d'école d'ingénieur.",
    ingenieu_premier_exp_title: "Premier contact avec le monde scientifique",
    ingenieur_premier_exp_text: "Durant le covid 19, et le confinement, j'ai appris les bases du javascript mais aussi les bases du développement web grâce à des cours en ligne ou bien des mentors qui répondaient à mes questions. C'est grâce à ces bases que j'ai pu développer entièrement ce site présentant mon e-portfolio.",
    ingenieu_TIPE1_title: "Mon premier projet alliant connaissances théoriques et pratiques",
    ingenieur_TIPE1_exp_text: "Mes deux premières années de CPGE m'ont poussé à développer mon premier projet concret. Une cible d'airsoft, moyennement aboutie, qui reposait sur des automatismes. Celui-ci m'a permis d'acquérir de grandes connaissances dans le domaine de la physique, mais aussi en programmation. En effet, toute la partie automatisation était faite en exclusivité grâce à Arduino.",
    ingenieu_TIPE2_title: "Mon deuxième projet, bien plus abouti, où la théorie et l'expérience s'entre-croisent",
    ingenieur_TIPE2_exp_text: "Mais c'est en réalité mon deuxième TIPE dont je suis le plus fier. J'ai été très investi et j'ai travaillé avec un préparateur du laboratoire de mon lycée: Vincent STEINMETZ. Un homme plein de ressources qui m'a appris bien plus en un an que ce que j'avais appris seul en deux. J'ai construit, automatisé, calculé des rendements et travaillé sur la thermodynamique d'une climatisation adiabatique directe. J'ai appris la soudure, l'électronique, l'impression 3D et bien d'autres.",
    ingenieur_year1_title: "Première année",
    ingenieur_year1_text: "Découverte des bases scientifiques et techniques en mécanique des fluides, mathématiques et informatique.",
    ingenieur_year2_title: "Deuxième année",
    ingenieur_year2_text: "Approfondissement en hydraulique, environnement et projets de groupe.",
    ingenieur_year3_title: "Troisième année",
    ingenieur_year3_text: "Spécialisation et préparation au stage de fin d’études.",

    // == Projets professionnels ==
    projet_texte: "Architecture navale",
    pourquoi_texte: "Pourquoi ce domaine ? Ayant fait de la voile durant mes vacances quand j'étais petit, j'ai toujours était impressioné par les bateaux à voile. J'ai aussi vu d'immenses et de puissants navires lors des fêtes maritimes de Brest à trois reprises. C'est leur architecture, leur fonctionnement, mais aussi la manière dont ils sont conçus qui m'ont toujours fasciné. C'est pourquoi j'ai décidé de me spécialiser dans ce domaine lors de ma troisième année d'école d'ingénieur.",

    video_title: "Vidéo de présentation pour CAM",
    presentation_video: "Voici une vidéo de présentation de mon parcours et de mes projets grâce aux interviews",

    projet_domaine: "Domaine : Architecture navale, R&D, efficacité énergétique et rendement des bateaux à voile",

    person1_name: "Personne interviewée 1 : Nicolas HENRY",
    person1_age: "Âge : 40 ans",
    person1_job: "Métier : Architecte naval",
    person1_location: "Lieu : Nantes, France",

    person2_name: "Personne interviewée 2 : Pierre-Yves LE FLOCH",
    person2_age: "Âge : 35 ans",
    person2_job: "Métier : Ingénieur en efficacité énergétique",
    person2_location: "Lieu : Brest, France",

    person3_name: "Personne interviewée 3 : Camille DURAND",
    person3_age: "Âge : 30 ans",
    person3_job: "Métier : Chercheuse en R&D navale",
    person3_location: "Lieu : Lorient, France",

    // == Activités ==

    voile_title: "Voile",
    voile_texte: "J'ai commencé très tôt la voile avec l'optimist, j'ai ensuite continué avec le catamaran. C'est ce sport qui m'a poussé vers cette carrière professionelle.",

    rando_title: "Randonnée",
    rando_texte: "J'aime beaucoup la randonnée, j'ai fait plusieurs treks en montagne, le dernier en date étant le Tour des Aiguilles Rouges pendat l'été 2025.",

    photo_title: "Photographie",
    photo_texte: "Ce qui me plait dans la photographie reste d'immortaliser des moments, des paysages, des instants de vie.",

    cuisine_title: "Cuisine",
    cuisine_texte: "J'ai l'habitude de cuisinier pour mes proches aux grandes occasions: nouvel an, Noël. Je préfère cuisinier des plats salés mais je fais aussi une très bonne tarte aux noix caramel!",

    impression_title: "Conception et Impression 3D",
    impression_texte: "J'ai commencé l'impression 3D en 2023 avec une Creality Ender 3, puis j'ai continué avec une Kingroon KP5L. J'ai aimé la possibilité de concrétiser mes modélisations grâce à cette révolution technologique.",

    apnee_title: "Apnée",
    apnee_texte: "Etant ashmatique, je me suis dirigé vers l'apnée en 2020. Cela m'a permis de découvrir les fonds marins mais aussi de me surpasser physiquement et mentalement.",

    basket_title: "Basket",
    basket_texte: "J'ai commencé le basket en 2012, j'ai joué en club jusqu'en 2021 lorsque je m'entranaîs avec une équipe de N2: les Canonniers de Metz mais ne parcitipait pas aux matchs. J'aime ce sport pour son esprit d'équipe et son intensité. En effet, j'étais très investi dans mon premier club (Jura Dolois Basket) où je passais l'entièreté de mes samedis à arbitrer et faire la table de match.",

    tennis_title: "Tennis",
    tennis_texte: "A l'âge de 4ans, je tapais déjà ma première balle. J'ai joué en club mais n'ai jamais fait beaucoup de compétition. J'aime ce sport pour la concentration et l'agilité qu'il demande.",

    percussions_title: "Percussions",
    percussions_texte: "Ayant été élevé dans une famille de musiciens, j'ai péné à trouver un instrument qui me correspondait, j'ai trouvé les percussions en passant par la trompette, le saxophone et d'autres. J'ai particulièrement apprécié mes années au conservatoire à rayonnement départemental de Dole lorsque beaucoup d'évènements étaient organisés: batucadas, concerts du conservatoire et bien d'autres.",




  },

  en: {
    title: "Yvan JACOB's E-Portfolio",
    main_title: "Yvan JACOB's E-Portfolio",
    menu_home: "Home",
    menu_activite: "Other activities",
    menu_ingenieur: "Engineering path",
    menu_projet:"Professional projects",
    menu_exp: "Professional, international and civic experiences",
    menu_cv: "Resume",
    intro_text: "I'm Yvan JACOB, a first-year student at ENSEEIHT (Fluid Mechanics - Water - Environment). Here you can discover my background, experiences, and professional project. If you have any questions, feel free to use the contact form.",

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
    ingenieur_intro_title: "My Engineering Path",
    ingenieur_intro_text: "Here is a description of my first contact with the scientific world, leading up to today where I am in my first year of engineering school.",
    ingenieu_premier_exp_title: "First Contact with the Scientific World",
    ingenieur_premier_exp_text: "During the COVID-19 lockdown, I learned the basics of JavaScript and web development through online courses and mentors who answered my questions. These foundational skills enabled me to fully develop this website showcasing my e-portfolio.",
    ingenieu_TIPE1_title: "My First Project Combining Theoretical and Practical Knowledge",
    ingenieur_TIPE1_exp_text: "My first two years in preparatory classes motivated me to develop my first concrete project: an airsoft target, moderately advanced, based on automation. This project allowed me to gain significant knowledge in physics and programming, as the entire automation part was exclusively done using Arduino.",
    ingenieu_TIPE2_title: "My Second, More Advanced Project Where Theory and Experimentation Intersect",
    ingenieur_TIPE2_exp_text: "However, I am most proud of my second TIPE project. I was highly invested and worked with a preparer from my school's laboratory: Vincent STEINMETZ. A resourceful man who taught me much more in one year than I had learned on my own in two. I built, automated, calculated efficiencies, and worked on the thermodynamics of a direct adiabatic air conditioning system. I learned welding, electronics, 3D printing, and much more.",
    ingenieur_year1_title: "First Year",
    ingenieur_year1_text: "Introduction to scientific and technical fundamentals in fluid mechanics, mathematics, and computer science.",
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

    person1_name: "Interviewee 1: Nicolas HENRY",
    person1_age: "Age: 40 years",
    person1_job: "Profession: Naval Architect",
    person1_location: "Location: Nantes, France",
    person2_name: "Interviewee 2: Pierre-Yves LE FLOCH",
    person2_age: "Age: 35 years",
    person2_job: "Profession: Energy Efficiency Engineer",
    person2_location: "Location: Brest, France",
    person3_name: "Interviewee 3: Camille DURAND",
    person3_age: "Age: 30 years",
    person3_job: "Profession: Naval R&D Researcher",
    person3_location: "Location: Lorient, France",

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
    percussions_texte: "Raised in a family of musicians, I sought an instrument that suited me and found percussion after trying trumpet, saxophone, and others. I particularly enjoyed my years at the Dole Regional Conservatory, where many events were organized: batucadas, conservatory concerts, and more.",




  },

  es: {
    title: "E-Portafolio de Yvan JACOB",
    main_title: "E-Portafolio de Yvan JACOB",
    menu_home: "Inicio",
    menu_activite: "Otras actividades",
    menu_ingenieur: "Trayectoria de ingeniería",
    menu_projet:"Proyectos profesionales",
    menu_exp: "Experiencias profesionales, internacionales y cívicas",
    menu_cv: "CV",
    intro_text: "Soy Yvan JACOB, un estudiante de primer año en ENSEEIHT (Mecánica de Fluidos - Agua - Medio Ambiente). Aquí puedes descubrir mi formación, experiencias y proyecto profesional. Si tienes alguna pregunta, no dudes en utilizar el formulario de contacto.",

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
    ingenieur_intro_title: "Mi Trayectoria de Ingeniería",
    ingenieur_intro_text: "Aquí hay una descripción de mi primer contacto con el mundo científico, que me llevó hasta hoy, donde estoy en mi primer año de escuela de ingeniería.",
    ingenieu_premier_exp_title: "Primer Contacto con el Mundo Científico",
    ingenieur_premier_exp_text: "Durante el confinamiento por COVID-19, aprendí los conceptos básicos de JavaScript y desarrollo web a través de cursos en línea y mentores que respondían a mis preguntas. Estas habilidades fundamentales me permitieron desarrollar completamente este sitio web que muestra mi e-portafolio.",
    ingenieu_TIPE1_title: "Mi Primer Proyecto que Combina Conocimientos Teóricos y Prácticos",
    ingenieur_TIPE1_exp_text: "Mis dos primeros años en clases preparatorias me motivaron a desarrollar mi primer proyecto concreto: un objetivo de airsoft, moderadamente avanzado, basado en la automatización. Este proyecto me permitió adquirir conocimientos significativos en física y programación, ya que toda la parte de automatización se realizó exclusivamente utilizando Arduino.",
    ingenieu_TIPE2_title: "Mi Segundo Proyecto, Más Avanzado, Donde la Teoría y la Experimentación se Entrecruzan",
    ingenieur_TIPE2_exp_text: "Sin embargo, estoy más orgulloso de mi segundo proyecto TIPE. Estuve muy involucrado y trabajé con un preparador del laboratorio de mi escuela: Vincent STEINMETZ. Un hombre lleno de recursos que me enseñó mucho más en un año de lo que había aprendido por mi cuenta en dos. Construí, automatizé, calculé eficiencias y trabajé en la termodinámica de un sistema de aire acondicionado adiabático directo. Aprendí soldadura, electrónica, impresión 3D y mucho más.",
    ingenieur_year1_title: "Primer Año",
    ingenieur_year1_text: "Introducción a los fundamentos científicos y técnicos en mecánica de fluidos, matemáticas e informática.",
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

    person1_name: "Entrevistado 1: Nicolas HENRY",
    person1_age: "Edad: 40 años",
    person1_job: "Profesión: Arquitecto Naval",
    person1_location: "Ubicación: Nantes, Francia",
    person2_name: "Entrevistado 2: Pierre-Yves LE FLOCH",
    person2_age: "Edad: 35 años",
    person2_job: "Profesión: Ingeniero de Eficiencia Energética",
    person2_location: "Ubicación: Brest, Francia",
    person3_name: "Entrevistado 3: Camille DURAND",
    person3_age: "Edad: 30 años",
    person3_job: "Profesión: Investigadora de I+D Naval",
    person3_location: "Ubicación: Lorient, Francia",

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
    percussions_texte: "Criado en una familia de músicos, busqué un instrumento que me conveniera y encontré la percusión después de probar la trompeta, el saxofón y otros. Disfruté particularmente mis años en el Conservatorio Regional de Dole, donde se organizaron muchos eventos: batucadas, conciertos del conservatorio y más.",


  },

  cn: {
    title: "Yvan JACOB的电子作品集",
    main_title: "Yvan JACOB的电子作品集",
    menu_home: "首页",
    menu_activite: "其他活动",
    menu_ingenieur: "工程师之路",
    menu_projet:"专业项目",
    menu_exp: "专业、国际和公民经验",
    menu_cv: "简历",
    intro_text: "我是Yvan JACOB，ENSEEIHT（流体力学-水-环境）的一年级学生。在这里，您可以了解我的背景、经验和职业规划。如果您有任何问题，请随时使用联系表格。",

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
    ingenieur_intro_title: "我的工程师之路",
    ingenieur_intro_text: "以下是我与科学世界的首次接触的描述，这段经历一直持续到今天，我现在是一名工程学院的一年级学生。",
    ingenieu_premier_exp_title: "与科学世界的首次接触",
    ingenieur_premier_exp_text: "在COVID-19封锁期间，我通过在线课程和回答我问题的导师学习了JavaScript和网页开发的基础知识。这些基础技能使我能够完全开发出展示我的电子作品集的网站。",
    ingenieu_TIPE1_title: "我第一个结合理论和实践知识的项目",
    ingenieur_TIPE1_exp_text: "我在预科班的前两年激励我开发了我的第一个具体项目：一个中等复杂的气枪靶，基于自动化。这个项目让我在物理和编程方面获得了显著的知识，因为整个自动化部分完全使用Arduino完成。",
    ingenieu_TIPE2_title: "我的第二个更先进的项目，理论与实验的交汇点",
    ingenieur_TIPE2_exp_text: "然而，我最自豪的是我的第二个TIPE项目。我非常投入，并与我学校实验室的一位预备员Vincent STEINMETZ合作。他是一个足智多谋的人，在一年内教会了我比我自己两年学到的还要多。我建造、自动化、计算效率，并研究了直接绝热空调系统的热力学。我学会了焊接、电子学、3D打印等等。",
    ingenieur_year1_title: "第一年",
    ingenieur_year1_text: "介绍流体力学、数学和计算机科学的科学和技术基础。",
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

    person1_name: "受访者1：Nicolas HENRY",
    person1_age: "年龄：40岁",
    person1_job: "职业：船舶建筑师",
    person1_location: "地点：法国南特",
    person2_name: "受访者2：Pierre-Yves LE FLOCH",
    person2_age: "年龄：35岁",
    person2_job: "职业：能源效率工程师",
    person2_location: "地点：法国布雷斯特",
    person3_name: "受访者3：Camille DURAND",
    person3_age: "年龄：30岁",
    person3_job: "职业：船舶研发研究员",
    person3_location: "地点：法国洛里昂",

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
    // Vérifie si le mot de passe a été déverrouillé
    if (localStorage.getItem("isUnlocked") === "true") {
      cvFrame.src = cvFiles[lang]; // vrai CV si déverrouillé
    } else {
      cvFrame.src = "cv/blank.pdf"; // sinon page blanche
    }
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


// ======================
// Initialisation DOM
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "fr";
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
// Formulaire contact
// ======================
function initContactForm(){
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if(!contactForm || !formStatus) return;

  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm('service_kebxxpt', 'template_t311c3h', this)
      .then(() => {
        formStatus.style.color = "green";
        formStatus.textContent = "Message envoyé avec succès !";
        contactForm.reset();
      }, (error) => {
        formStatus.style.color = "red";
        formStatus.textContent = "Une erreur est survenue, réessayez plus tard.";
        console.error("EmailJS error:", error);
      });
  });
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
// Mot de passe
// ======================

document.addEventListener("DOMContentLoaded", () => {
  const lockIcon = document.getElementById("lockIcon");
  const lockImage = document.getElementById("lockImage");
  const passwordModal = document.getElementById("passwordModal");
  const passwordInput = document.getElementById("passwordInput");
  const submitPassword = document.getElementById("submitPassword");
  const skipPassword = document.getElementById("skipPassword");
  const passwordError = document.getElementById("passwordError");
  const closeButtons = document.querySelectorAll(".close, .access-modal__close");
  const sensitiveElements = document.querySelectorAll(".sensitive");
  const cvFrame = document.getElementById("cvFrame"); // iframe du CV

  const correctPassword = "MDPpourCAM2025-eportfolioYvAnJaCOB31400";

  // --- FUNCTIONS ---
  const showSensitive = () => {
    sensitiveElements.forEach(el => {
      el.style.transition = "opacity 0.5s";
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = el.dataset.value;
        el.style.opacity = 1;
      }, 300);
    });
    lockImage.src = "images/lock-open.png";
    lockIcon.style.transform = "rotate(20deg)";
    setTimeout(() => lockIcon.style.transform = "rotate(0deg)", 200);
    localStorage.setItem("isUnlocked", "true");

    // Charger le vrai PDF seulement quand déverrouillé
    if (cvFrame) cvFrame.src = cvFrame.dataset.src;
  };

  const hideSensitive = () => {
    sensitiveElements.forEach(el => {
      el.style.transition = "opacity 0.5s";
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = el.dataset.mask || el.textContent.replace(/./g, "x");
        el.style.opacity = 1;
      }, 300);
    });
    lockImage.src = "images/lock-closed.png";
    lockIcon.style.transform = "rotate(-20deg)";
    setTimeout(() => lockIcon.style.transform = "rotate(0deg)", 200);
    localStorage.removeItem("isUnlocked");

    // Remet la page blanche dans l'iframe
    if (cvFrame) cvFrame.src = "cv/blank.pdf";
  };

  const openModal = modal => {
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.style.animation = "fadeInScale 0.3s forwards";
  };

  const closeModal = modal => {
    modal.style.animation = "fadeOutScale 0.3s forwards";
    setTimeout(() => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }, 300);
  };

  function validatePassword() {
    if (passwordInput.value === correctPassword) {
      showSensitive();
      closeModal(passwordModal);
    } else {
      passwordError.style.display = "block";
      passwordError.style.animation = "shake 0.3s";
      setTimeout(() => passwordError.style.animation = "", 300);
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  // --- EVENTS ---
  lockIcon.addEventListener("click", () => {
    if (localStorage.getItem("isUnlocked") === "true") {
      hideSensitive();
      return;
    }
    openModal(passwordModal);
    passwordInput.value = "";
    passwordError.style.display = "none";
    passwordInput.focus();
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal, .access-modal");
      closeModal(modal);
    });
  });

  submitPassword.addEventListener("click", validatePassword);

  passwordInput.addEventListener("keypress", e => {
    if (e.key === "Enter") validatePassword();
  });

  skipPassword.addEventListener("click", () => {
    hideSensitive();
    closeModal(passwordModal);
  });

  // --- INITIALISATION ---
  if (localStorage.getItem("isUnlocked") === "true") {
  showSensitive(); // déjà déverrouillé
  if (cvFrame) cvFrame.src = cvFrame.dataset.src;
  } else {
  hideSensitive(); // sinon masqué
  if (cvFrame) cvFrame.src = "cv/blank.pdf";
  }
});

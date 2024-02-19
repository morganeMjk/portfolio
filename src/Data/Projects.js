const projects = [
  {
    id: 1,
    title: "Pokédex",
    skillsId: [6, 3, 8, 10],
    content: ["LE traditionnel Pokédex, et oui ! Rien d'innovant, je vous l'accorde.",  "L'intérêt ici était de découvrir Angular sous tous ces angles :",  "Composants - Templates - Directives - Pipes - Routes - Modules - Services - Formulaires - Programmation réactive - Requêtes Http - Authentification et sécurité.", "Ce projet a été réalisé à l'aide de la vidéo youtube de Simon Dierny.", "Après avoir suivi le tutoriel complet, je suis revenue sur l'intégralité des fichiers, afin d'y apposer des commentaires complets, me permettant ainsi de valider ma compréhension du fonctionnement de ce Framework.", "Rendez-vous prochainement ici, pour découvrir mes futurs projets Angular !"],
    link: "https://github.com/morganeMjk/pokedex-app",
    visit: "Consulter le repo Github",
    thumbnail: "projet4.png",
    target: true,
    date: "Septembre 2023"
  },
  {
    id: 2,
    title: "La Concordia",
    skillsId: [3, 4, 7, 10, 14, 15],
    content: ["Ce projet a été réalisé dans le cadre de mon stage de fin d'étude et a fait l'objet d'une présentation technique et fonctionnelle pour l'obtention du titre professionnel Développeur Web et Web Mobile.", "L'objectif été de permettre au visiteur de suivre la vie de l'association La Concordia, en charge de l'école de musique et de l'orchestre de la ville de Loos-en-Gohelle.",  "Il été également question de mettre à disposition des membres de l'association un espace reservé leur permettant d'ajouter et de modifier du contenu. Cet espace devait aussi permettre aux professeurs de musique de mettre à disposition des élèves les partitions étudiées."],
    link: "https://beta.laconcordia.fr/",
    visit: "Visiter le site",
    thumbnail: "projet1.png",
    target: true,
    date: "Juin 2023"
  },
  {
    id: 3,
    title: "Portfolio",
    skillsId: [3, 4, 7, 14, 17],
    content: ["Il s'agit tout simplement du site sur lequel vous êtes actuellement.", "L'objectif de ce projet était de présenter mon travail tout en développant un design dynamique et agréable à l'aide de React et de Sass."],
    link: "#header",
    visit: "Visiter le site",
    thumbnail: "projet2.png",
    target: false,
    date: "Aout 2023"
  },
  {
    id: 4,
    title: "Formulaire",
    skillsId: [1, 2, 4],
    content: ["Ce projet résulte d'un exercice pratique qui m'a été demandé durant ma formation de développeur web.",  "La consigne été de réaliser un formulaire pour une commande de pizzas en ligne.",  "Il était demandé d'utiliser différents types de champs, d'ajouter des messages d'erreur et la validation des données saisies par l'utilisateur, et d'ajouter une fonction permettant le calcul du cout global de la commande."],
    link: "https://github.com/morganeMjk/pizza-form",
    visit: "Consulter le repo Github",
    thumbnail: "projet3.jpg",
    target: true,
    date: "Février 2023"
  },
  {
    id: 5,
    title: "API",
    skillsId: [23 , 22],
    content: ["Ce projet résulte d'un exercice pratique qui m'a été demandé durant le bootcamp .Net C#.",  "La consigne été de réaliser le site internet pour un restaurant et d'y implémenter un backoffice permettant l'ajout, la modification et la suppression des données."],
    link: "https://github.com/simplon-lille-csharp-dotnet/laCroute_dev",
    visit: "Consulter le repo Github",
    thumbnail: "projet5.png",
    target: true,
    date: "Janvier 2024"
  },
  {
    id: 6,
    title: "Application Console",
    skillsId: [23 , 22],
    content: ["Ce projet résulte d'un exercice pratique qui m'a été demandé durant le bootcamp .Net C#.",  "Cette application permet aux utilisateurs de gérer leurs comptes bancaires, d'effectuer des dépôts, des retraits, des transferts et de consulter l'historique des transactions.", "L'application prend en charge deux types de comptes : le compte courant et le compte épargne."],
    link: "https://github.com/morganeMjk/dev-bank",
    visit: "Consulter le repo Github",
    thumbnail: "projet6.png",
    target: true,
    date: "Décembre 2023"
  },
];

export default projects;
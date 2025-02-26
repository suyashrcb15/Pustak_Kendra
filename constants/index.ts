export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  collegeId: "College ID Number",
  password: "Password",
  collegeCard: "Upload College ID Card",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  collegeId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "Ramayana",
    author: "Valmiki",
    genre: "Epic / Mythology",
    rating: 4.9,
    total_copies: 50,
    available_copies: 25,
    description:
      "An ancient Indian epic that narrates the life of Lord Rama, his exile, and battle against Ravana.",
    color: "#ff7400",
    cover:
      "https://m.media-amazon.com/images/I/91GuzI72mjL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://embassyofindiabangkok.gov.in/public/assets/pdf/Valmiki%20Ramayana%20aur%20Ramakien%20Ek%20Tulnamatmak%20Adhyayan.pdf",
    summary:
      "A revered Hindu epic, the Ramayana tells the story of Lord Rama, his devotion, trials, and ultimate victory over evil.",
    is_favorite: true,
    isLoanedBook: true,
  },
  {
    id: 2,
    title: "Mahabharata",
    author: "Vyasa",
    genre: "Epic / Mythology",
    rating: 4.9,
    total_copies: 60,
    available_copies: 30,
    description:
      "A grand epic detailing the Kurukshetra war and the fates of the Pandavas and Kauravas.",
    color: "#6a0dad",
    cover: "https://m.media-amazon.com/images/I/81gxiU-w93L.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://www.holybooks.com/wp-content/uploads/MahabharataOfVyasa-EnglishTranslationByKMGanguli.pdf",
    summary:
      "The longest epic ever written, Mahabharata is a tale of duty, righteousness, and the cosmic battle between good and evil.",
  },
  {
    id: 3,
    title: "Arthashastra",
    author: "Chanakya",
    genre: "Political Science / Economics",
    rating: 4.7,
    total_copies: 40,
    available_copies: 20,
    description:
      "An ancient Indian treatise on statecraft, economic policy, and military strategy.",
    color: "#2f4f4f",
    cover:
      "https://m.media-amazon.com/images/I/71qtCWmRb0L._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://library.bjp.org/jspui/bitstream/123456789/80/1/R.%20Shamasastry-Kautilya's%20Arthashastra%20%20%20(1915).pdf",
    summary:
      "A timeless guide on governance, diplomacy, and economic strategy by the great scholar Chanakya.",
  },
  {
    id: 4,
    title: "The Tales of Tenali Rama",
    author: "Kamala Chandrakant",
    genre: "Folklore / Humor",
    rating: 4.7,
    total_copies: 40,
    available_copies: 18,
    description:
      "A delightful collection of witty and humorous tales of Tenali Rama, the legendary court jester and poet in the Vijayanagara Empire.",
    color: "#ffcc00",
    cover:
      "https://m.media-amazon.com/images/I/91K3dRnLPzL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://www.arvindguptatoys.com/arvindgupta/tenali-raman.pdf",
    summary:
      "Enjoy the adventures of Tenali Rama, known for his sharp wit, problem-solving skills, and humorous encounters in King Krishnadevaraya’s court.",
  },
  {
    id: 5,
    title: "The Life of Chhatrapati Shivaji",
    author: "Jadunath Sarkar",
    genre: "History / Biography",
    rating: 4.9,
    total_copies: 50,
    available_copies: 22,
    description:
      "An inspiring biography of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire, known for his valor, strategy, and governance.",
    color: "#8b0000",
    cover:
      "https://m.media-amazon.com/images/I/711pdQRyzkL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://www.rarebooksocietyofindia.org/book_archive/196174216674_10155903990831675.pdf",
    summary:
      "A detailed account of Shivaji Maharaj’s journey, from his early struggles to his establishment of a powerful and resilient kingdom.",
  },
  {
    id: 6,
    title: "Rajatarangini",
    author: "Kalhana",
    genre: "History / Literature",
    rating: 4.5,
    total_copies: 30,
    available_copies: 15,
    description:
      "A historical chronicle of the kings of Kashmir, written in the 12th century.",
    color: "#8b4513",
    cover:
      "https://m.media-amazon.com/images/I/61vKE3mieIL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://rarebooksocietyofindia.org/book_archive/196174216674_10156447661056675.pdf",
    summary:
      "A poetic and historical narrative detailing the lineage of Kashmir’s rulers.",
  },
  {
    id: 7,
    title: "Panchatantra",
    author: "Vishnu Sharma",
    genre: "Fables / Folklore",
    rating: 4.8,
    total_copies: 40,
    available_copies: 25,
    description:
      "A collection of ancient Indian fables that teach life lessons through animal characters.",
    color: "#ff6347",
    cover:
      "https://m.media-amazon.com/images/I/81xqg04BTLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://www.banyantree.in/jagdishpur/wp-content/uploads/2020/06/Panchatantra-.pdf",
    summary:
      "Timeless fables from Indian folklore that impart wisdom and moral values.",
  },
  {
    id: 8,
    title: "Kumbh Mela: Mapping the Epic Pilgrimage",
    author: "S. Tiwari",
    genre: "Religious Studies / Travel",
    rating: 4.7,
    total_copies: 25,
    available_copies: 10,
    description:
      "A detailed account of the Kumbh Mela, one of the largest spiritual gatherings in the world.",
    color: "#4682b4",
    cover:
      "https://m.media-amazon.com/images/I/71C0tIO2ccL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    pdf: "https://gosai.com/sites/gosai/files/books/kumbha-mela-book.pdf",
    summary:
      "A comprehensive exploration of the Kumbh Mela festival, highlighting its cultural and spiritual significance.",
  },
];

export const sampleQuestions = [
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata?",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question: "Who was the eldest of the Pandavas?",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question: "Which book is written by Dr. B.R. Ambedkar?",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question: "Who is known as the God of Wisdom in Hindu mythology?",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question: "Who was the father of Rama in the Ramayana?",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'?",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question: "Who was the charioteer of Arjuna in the Mahabharata?",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance?",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'?",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana?",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question: "Who was the eldest of the Pandavas? (2)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question: "Which book is written by Dr. B.R. Ambedkar? (3)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question: "Who is known as the God of Wisdom in Hindu mythology? (4)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question: "Who was the father of Rama in the Ramayana? (5)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question: "Who was the charioteer of Arjuna in the Mahabharata? (7)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1) (11)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question: "Who was the eldest of the Pandavas? (2) (12)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question: "Which book is written by Dr. B.R. Ambedkar? (3) (13)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question: "Who is known as the God of Wisdom in Hindu mythology? (4) (14)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question: "Who was the father of Rama in the Ramayana? (5) (15)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question: "Who was the charioteer of Arjuna in the Mahabharata? (7) (17)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9) (19)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10) (20)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1) (11) (21)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question: "Who was the eldest of the Pandavas? (2) (12) (22)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question: "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question: "Who was the father of Rama in the Ramayana? (5) (15) (25)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16) (26)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9) (19) (29)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10) (20) (30)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1) (11) (21) (31)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question: "Who was the eldest of the Pandavas? (2) (12) (22) (32)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question: "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question: "Who was the father of Rama in the Ramayana? (5) (15) (25) (35)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16) (26) (36)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9) (19) (29) (39)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10) (20) (30) (40)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1) (11) (21) (31) (41)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question: "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10) (20) (30) (40) (50)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question: "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question: "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question: "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121) (131)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122) (132)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123) (133)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124) (134)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125) (135)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126) (136)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127) (137)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128) (138)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129) (139)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130) (140)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121) (131) (141)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122) (132) (142)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123) (133) (143)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124) (134) (144)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125) (135) (145)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126) (136) (146)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127) (137) (147)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128) (138) (148)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129) (139) (149)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130) (140) (150)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121) (131) (141) (151)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122) (132) (142) (152)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123) (133) (143) (153)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124) (134) (144) (154)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125) (135) (145) (155)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126) (136) (146) (156)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127) (137) (147) (157)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128) (138) (148) (158)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129) (139) (149) (159)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130) (140) (150) (160)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121) (131) (141) (151) (161)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122) (132) (142) (152) (162)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123) (133) (143) (153) (163)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124) (134) (144) (154) (164)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125) (135) (145) (155) (165)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126) (136) (146) (156) (166)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127) (137) (147) (157) (167)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128) (138) (148) (158) (168)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129) (139) (149) (159) (169)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130) (140) (150) (160) (170)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121) (131) (141) (151) (161) (171)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122) (132) (142) (152) (162) (172)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123) (133) (143) (153) (163) (173)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124) (134) (144) (154) (164) (174)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125) (135) (145) (155) (165) (175)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126) (136) (146) (156) (166) (176)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127) (137) (147) (157) (167) (177)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128) (138) (148) (158) (168) (178)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129) (139) (149) (159) (169) (179)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130) (140) (150) (160) (170) (180)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
  {
    category: "Indian Epics",
    question:
      "Who wrote the Mahabharata? (1) (11) (21) (31) (41) (51) (61) (71) (81) (91) (101) (111) (121) (131) (141) (151) (161) (171) (181)",
    options: ["Valmiki", "Tulsidas", "Vyasa", "Kalidasa"],
    answer: "Vyasa",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the eldest of the Pandavas? (2) (12) (22) (32) (42) (52) (62) (72) (82) (92) (102) (112) (122) (132) (142) (152) (162) (172) (182)",
    options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"],
    answer: "Yudhishthira",
  },
  {
    category: "Indian Books",
    question:
      "Which book is written by Dr. B.R. Ambedkar? (3) (13) (23) (33) (43) (53) (63) (73) (83) (93) (103) (113) (123) (133) (143) (153) (163) (173) (183)",
    options: [
      "The Annihilation of Caste",
      "Discovery of India",
      "My Experiments with Truth",
      "Arthashastra",
    ],
    answer: "The Annihilation of Caste",
  },
  {
    category: "Indian Mythology",
    question:
      "Who is known as the God of Wisdom in Hindu mythology? (4) (14) (24) (34) (44) (54) (64) (74) (84) (94) (104) (114) (124) (134) (144) (154) (164) (174) (184)",
    options: ["Brahma", "Shiva", "Ganesha", "Vishnu"],
    answer: "Ganesha",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the father of Rama in the Ramayana? (5) (15) (25) (35) (45) (55) (65) (75) (85) (95) (105) (115) (125) (135) (145) (155) (165) (175) (185)",
    options: ["Dasharatha", "Janaka", "Duryodhana", "Vishwamitra"],
    answer: "Dasharatha",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Gitanjali'? (6) (16) (26) (36) (46) (56) (66) (76) (86) (96) (106) (116) (126) (136) (146) (156) (166) (176) (186)",
    options: [
      "Rabindranath Tagore",
      "Bankim Chandra Chattopadhyay",
      "Premchand",
      "Sarojini Naidu",
    ],
    answer: "Rabindranath Tagore",
  },
  {
    category: "Indian Epics",
    question:
      "Who was the charioteer of Arjuna in the Mahabharata? (7) (17) (27) (37) (47) (57) (67) (77) (87) (97) (107) (117) (127) (137) (147) (157) (167) (177) (187)",
    options: ["Bhishma", "Dronacharya", "Krishna", "Karna"],
    answer: "Krishna",
  },
  {
    category: "Indian Mythology",
    question:
      "Which river is said to have descended to earth due to Bhagiratha\u2019s penance? (8) (18) (28) (38) (48) (58) (68) (78) (88) (98) (108) (118) (128) (138) (148) (158) (168) (178) (188)",
    options: ["Yamuna", "Saraswati", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Indian Books",
    question:
      "Who wrote 'Arthashastra'? (9) (19) (29) (39) (49) (59) (69) (79) (89) (99) (109) (119) (129) (139) (149) (159) (169) (179) (189)",
    options: ["Chanakya", "Kautilya", "Vishnu Sharma", "Both A and B"],
    answer: "Both A and B",
  },
  {
    category: "Indian Mythology",
    question:
      "Who was the wife of Ravana? (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (110) (120) (130) (140) (150) (160) (170) (180) (190)",
    options: ["Mandodari", "Kaikeyi", "Draupadi", "Sita"],
    answer: "Mandodari",
  },
];

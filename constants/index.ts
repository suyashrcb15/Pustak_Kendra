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
    text: "All Users",
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
    color: "#a52a2a",
    cover:
      "https://m.media-amazon.com/images/I/81G7S3Zg+lL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
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
    summary:
      "A timeless guide on governance, diplomacy, and economic strategy by the great scholar Chanakya.",
  },
  {
    id: 4,
    title: "The Discovery of India",
    author: "Jawaharlal Nehru",
    genre: "History / Politics",
    rating: 4.6,
    total_copies: 35,
    available_copies: 15,
    description:
      "A deep exploration of India’s history, culture, and philosophical heritage.",
    color: "#b8860b",
    cover:
      "https://m.media-amazon.com/images/I/61zZzKlLleL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A personal and historical account of India’s rich past by the first Prime Minister of India.",
  },
  {
    id: 5,
    title: "The Story of My Experiments with Truth",
    author: "Mahatma Gandhi",
    genre: "Autobiography / Philosophy",
    rating: 4.8,
    total_copies: 45,
    available_copies: 20,
    description:
      "The autobiography of Mahatma Gandhi, chronicling his journey of self-discovery and truth.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/61Q3PvMKEkL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A profound account of Mahatma Gandhi’s life, struggles, and philosophy of non-violence.",
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
    summary:
      "Timeless fables from Indian folklore that impart wisdom and moral values.",
  },
  {
    id: 8,
    title: "Kumbh Mela: Mapping the Ephemeral Megacity",
    author: "Rahul Mehrotra & Felipe Vera",
    genre: "Culture / Urban Studies",
    rating: 4.8,
    total_copies: 35,
    available_copies: 15,
    description:
      "An interdisciplinary study on the urban planning, infrastructure, and social impact of Kumbh Mela.",
    color: "#a52a2a",
    cover:
      "https://m.media-amazon.com/images/I/71C0tIO2ccL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "A detailed exploration of the Kumbh Mela's ephemeral megacity, its design, and its impact on urban planning.",
  },
];

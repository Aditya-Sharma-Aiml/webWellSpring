import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentNavbar from "../components/StudentNavbar";
import { BookOpen, Headphones, ArrowLeft, Search, Star } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  readLink: string;
  audioLink?: string;
  imageUrl: string;
  rating: number;
}

const BooksHub: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Self-Help",
    "Motivation",
    "Productivity",
    "Mindfulness",
    "Stress Management",
  ];

  const books: Book[] = [
    {
      id: "1",
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Mindfulness",
      description:
        "A guide to spiritual enlightenment and living in the present moment.",
<<<<<<< HEAD
      readLink:
        "https://ia800406.us.archive.org/4/items/ThePowerOfNowEckhartTolle_201806/The%20Power%20Of%20Now%20-%20Eckhart%20Tolle.pdf",
      audioLink: "https://open.spotify.com/show/6nvp4fZgOxSZYdLCRfQSiz",
=======
      readLink: "https://example.com/book1",
      audioLink: "https://example.com/audio1",
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
      imageUrl:
        "https://youaligned.com/wp-content/uploads/2022/09/the-power-of-now-featured.jpg",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Productivity",
      description:
        "An easy and proven way to build good habits and break bad ones.",
<<<<<<< HEAD
      readLink:
        "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf",
      audioLink: "https://open.spotify.com/show/1IoRb7aM7p7tKObpxpf6TO",
=======
      readLink: "https://example.com/book2",
      audioLink: "https://example.com/audio2",
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1200/1*yPTgWvFZ_jy7rsscgNrTkA.jpeg",
      rating: 4.9,
    },
    {
      id: "3",
      title: "The Anxiety and Stress Solution",
      author: "Chloe Brotheridge",
      category: "Stress Management",
      description:
        "Practical techniques to overcome worry and live a calmer life.",
<<<<<<< HEAD
      readLink:
        "https://cdn.bookey.app/files/pdf/book/en/the-anxiety-solution.pdf",
=======
      readLink: "https://example.com/book3",
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
      imageUrl:
        "https://tse4.mm.bing.net/th/id/OIP.lJHOu8ABr4zupZGwnPemrwAAAA?pid=ImgDet&w=178&h=251&c=7&dpr=1.5&o=7&rm=3",
      rating: 4.6,
    },
    {
      id: "4",
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      category: "Motivation",
      description:
        "How we can learn to fulfill our potential through the power of growth mindset.",
<<<<<<< HEAD
      readLink:
        "https://adrvantage.com/wp-content/uploads/2023/02/Mindset-The-New-Psychology-of-Success-Dweck.pdf",
      audioLink: "https://open.spotify.com/episode/7iCtLL3tcCaZ5RaBgDYkSH",
=======
      readLink: "https://example.com/book4",
      audioLink: "https://example.com/audio4",
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
      imageUrl:
        "https://img.lazcdn.com/g/ff/kf/S5b72e6c011174422a06091b2a5ec31f3n.jpg_720x720q80.jpg",
      rating: 4.7,
    },
    {
      id: "5",
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      category: "Self-Help",
      description: "Powerful lessons in personal change and effectiveness.",
<<<<<<< HEAD
      readLink:
        "https://icrrd.com/public/media/01-11-2020-212827The%207%20Habits%20of%20Highly%20Effective%20People.pdf",
      audioLink: "https://open.spotify.com/show/1BiL8ElHJeVfaprIM8OkNY",
=======
      readLink: "https://example.com/book5",
      audioLink: "https://example.com/audio5",
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.wEb78zOnMVZ0nAvd3RDEvwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.8,
    },
    {
      id: "6",
      title: "The Gifts of Imperfection",
      author: "Brené Brown",
      category: "Self-Help",
      description:
        "Let go of who you think you're supposed to be and embrace who you are.",
<<<<<<< HEAD
      readLink: "https://ati.dae.gov.in/ati12052021_4.pdf",
=======
      readLink: "https://example.com/book6",
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
      imageUrl:
        "https://tse2.mm.bing.net/th/id/OIP.c9IEwKJUyR_D9jBzVDtQawHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.9,
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-500 opacity-95 ">
      <StudentNavbar activeSection="books" setActiveSection={() => {}} />

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center mb-10">
          <button
            onClick={() => navigate("/student-dashboard")}
            className="flex items-center text-gray-600 hover:text-blue-600 mr-6 transition-all duration-200"
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-500 opacity-90">
      <StudentNavbar activeSection="books" setActiveSection={() => {}} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate("/student-dashboard")}
            className="flex items-center text-gray-600 hover:text-blue-500 mr-6 transition-colors duration-200"
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Dashboard
          </button>
          <div>
<<<<<<< HEAD
            <h1 className="text-4xl font-bold text-gray-800 mb-1 tracking-wide">
              Books Hub
            </h1>
            <p className="text-gray-600 text-lg font-semi-bold">
              Discover inspiring books for your mental wellbeing 🌱
=======
            <h1 className="text-3xl font-light text-gray-800 mb-2">
              Books Hub
            </h1>
            <p className="text-gray-600">
              Discover books to support your growth and wellbeing
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            </p>
          </div>
        </div>

        {/* Search & Categories */}
<<<<<<< HEAD
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
            </div>
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
=======
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
<<<<<<< HEAD
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
=======
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
                    selectedCategory === cat
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
<<<<<<< HEAD
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
            >
              <img
                src={book.imageUrl}
                alt={book.title}
<<<<<<< HEAD
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block">
                  {book.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 italic">
                  by {book.author}
                </p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                  {book.description}
                </p>
=======
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2 inline-block">
                  {book.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-gray-700 text-sm mb-4">{book.description}</p>
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {book.rating}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={book.readLink}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md"
=======
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
                  >
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Read
                  </a>

                  {book.audioLink && (
                    <a
                      href={book.audioLink}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md"
=======
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
                    >
                      <Headphones className="w-4 h-4 inline mr-2" />
                      Listen
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
<<<<<<< HEAD
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No books found
            </h3>
            <p className="text-gray-500 text-lg">
=======
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No books found
            </h3>
            <p className="text-gray-500">
>>>>>>> 78e23f8de1247b7cb9eb7bd8043a2ada8bdd99d5
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BooksHub;

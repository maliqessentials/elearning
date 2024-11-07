import React, { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  BookOpen,
  Users,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent } from "./Components/Card";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Matematika Dasar",
      description: "Pembelajaran konsep dasar matematika untuk SMA",
      instructor: "Pak Andi",
      progress: 65,
      totalStudents: 32,
      duration: "48 jam",
      category: "matematika",
      thumbnail: "/src/assets/cover-depan-9.png",
      nextSession: "Senin, 21 Oktober 2024",
    },
    {
      id: 2,
      title: "Fisika Kelas 10",
      description: "Pengenalan konsep dasar fisika dan mekanika",
      instructor: "Bu Siti",
      progress: 50,
      totalStudents: 28,
      duration: "42 jam",
      category: "fisika",
      thumbnail: "/",
      nextSession: "Selasa, 22 Oktober 2024",
    },
    {
      id: 3,
      title: "Bahasa Inggris",
      description: "Peningkatan kemampuan berbahasa Inggris",
      instructor: "Mr. John",
      progress: 80,
      totalStudents: 35,
      duration: "36 jam",
      category: "bahasa",
      thumbnail: "/src/assets/cover.jpg",
      nextSession: "Rabu, 23 Oktober 2024",
    },
    {
      id: 4,
      title: "Agama Islam",
      description: "Mengenal konsep dasar agama Islam",
      instructor: "Mr. John",
      progress: 80,
      totalStudents: 35,
      duration: "36 jam",
      category: "Agama Islam",
      thumbnail: "/api/placeholder/320/180",
      nextSession: "Rabu, 23 Oktober 2024",
    },
    {
      id: 5,
      title: "Sejarah Indonesia",
      description: "Mengenal konsep dasar sejarah Indonesia",
      instructor: "Mr. John",
      progress: 80,
      totalStudents: 35,
      duration: "36 jam",
      category: "Sejarah Indonesia",
      thumbnail: "/api/placeholder/320/180",
      nextSession: "Rabu, 23 Oktober 2024",
    },
    {
      id: 6,
      title: "Tik",
      description: "mengenal konsep komputer",
      instructor: "Mr. John",
      progress: 80,
      totalStudents: 35,
      duration: "36 jam",
      category: "Tik",
      thumbnail: "/api/placeholder/320/180",
      nextSession: "Rabu, 23 Oktober 2024",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || course.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleBackToDashboard = () => {
    window.history.back();
  };

  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <button
          onClick={handleBackToDashboard}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Kembali ke Dashboard"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Kelas Saya</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Gabung Kelas Baru
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari kelas..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              selectedFilter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("all")}
          >
            <Filter className="w-4 h-4" />
            Semua
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === "matematika"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("matematika")}
          >
            Matematika
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === "fisika"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("fisika")}
          >
            Fisika
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === "Agama Islam"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("Agama Islam")}
          >
            Agama Islam
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === "bahasa"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("bahasa")}
          >
            Bahasa
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === "Sejarah Indonesia"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("Sejarah Indonesia")}
          >
            Sejarah Indonesia
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedFilter === "Tik"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedFilter("Tik")}
          >
            TIK
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-72 object-cover object-top"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.totalStudents} Siswa</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Sesi berikutnya: {course.nextSession}</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600">
                    Progress
                  </span>
                  <span className="text-xs font-semibold text-blue-600">
                    {course.progress}%
                  </span>
                </div>
                <div className="h-2 rounded bg-blue-100">
                  <div
                    style={{ width: `${course.progress}%` }}
                    className="h-full rounded bg-blue-500"
                  ></div>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Lanjutkan Belajar
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

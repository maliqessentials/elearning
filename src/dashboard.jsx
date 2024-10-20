import React, { useState } from 'react';
import { BookOpen, Video, FileText, Users, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import untuk navigasi

const ElearningPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();  // Hook untuk navigasi

  const courses = [
    {
      id: 1,
      title: "Matematika Dasar",
      instructor: "Pak Andi",
      progress: 65,
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 2, 
      title: "Fisika Kelas 10",
      instructor: "Bu Siti",
      progress: 45,
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 3,
      title: "Bahasa Inggris",
      instructor: "Mr. John",
      progress: 80,
      thumbnail: "/api/placeholder/320/180"
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Ujian Tengah Semester",
      date: "25 Oktober 2024",
      content: "Persiapkan diri untuk UTS minggu depan"
    },
    {
      id: 2,
      title: "Tugas Matematika",
      date: "22 Oktober 2024", 
      content: "Kumpulkan tugas BAB 3 sebelum jam 12 malam"
    }
  ];

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === 'courses') {
      navigate('/courses');  // Arahkan ke halaman Kelas
    } else if (tab === 'dashboard') {
      navigate('/');  // Arahkan ke Dashboard
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">E-Learning Platform</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-lg">
              <Users className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-2">
            <nav className="space-y-2">
              <button
                onClick={() => handleNavigation('dashboard')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => handleNavigation('courses')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === 'courses' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Video className="w-5 h-5" />
                <span>Kelas</span>
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === 'assignments' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Tugas</span>
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === 'calendar' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Jadwal</span>
              </button>
            </nav>
          </div>

          {/* Konten Dashboard atau Kelas */}
          <div className="col-span-10">
            {/* Konten dashboard atau lainnya tergantung tab yang aktif */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-2xl font-bold mb-2">Selamat Datang, Siswa!</h2>
              <p className="text-gray-600">Lanjutkan pembelajaran Anda hari ini.</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">Pengajar: {course.instructor}</p>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            Progress
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            {course.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div
                          style={{ width: `${course.progress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Pengumuman</h2>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-b pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{announcement.title}</h3>
                        <p className="text-gray-600 text-sm">{announcement.content}</p>
                      </div>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElearningPlatform;

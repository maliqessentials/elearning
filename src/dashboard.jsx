import React, { useState } from "react";
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ElearningPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Matematika Dasar",
      instructor: "Pak Andi",
      progress: 65,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 2,
      title: "Fisika Kelas 10",
      instructor: "Bu Siti",
      progress: 45,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 3,
      title: "Bahasa Inggris",
      instructor: "Mr. John",
      progress: 80,
      thumbnail: "/api/placeholder/320/180",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Ujian Tengah Semester",
      date: "25 Oktober 2024",
      content: "Persiapkan diri untuk UTS minggu depan",
    },
    {
      id: 2,
      title: "Tugas Matematika",
      date: "22 Oktober 2024",
      content: "Kumpulkan tugas BAB 3 sebelum jam 12 malam",
    },
    {
      id: 3,
      title: "Tugas Matematika",
      date: "22 Oktober 2024",
      content: "Kumpulkan tugas BAB 3 sebelum jam 12 malam",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Tugas Matematika - BAB 3 Persamaan Linear",
      subject: "Matematika Dasar",
      dueDate: "2024-10-22",
      status: "pending",
      description: "Kerjakan soal latihan BAB 3 halaman 45-47",
      instructor: "Pak Andi",
    },
    {
      id: 2,
      title: "Essay Bahasa Inggris - My Holiday",
      subject: "Bahasa Inggris",
      dueDate: "2024-10-25",
      status: "completed",
      description: "Write an essay about your last holiday (min. 500 words)",
      instructor: "Mr. John",
    },
    {
      id: 3,
      title: "Laporan Praktikum Fisika",
      subject: "Fisika Kelas 10",
      dueDate: "2024-10-28",
      status: "pending",
      description: "Buat laporan hasil praktikum pengukuran massa jenis",
      instructor: "Bu Siti",
    },
  ];

  const scheduleItems = [
    {
      id: 1,
      subject: "Matematika Dasar",
      time: "08:00 - 09:30",
      teacher: "Dr. Siti Aminah",
      type: "Video Conference",
      date: "Senin",
      material: "Aljabar Linear",
    },
    {
      id: 2,
      subject: "Bahasa Inggris",
      time: "10:00 - 11:30",
      teacher: "Mr. John",
      type: "Self-paced Learning",
      date: "Senin",
      material: "Business English",
    },
    {
      id: 3,
      subject: "Fisika Kelas 10",
      time: "13:00 - 14:30",
      teacher: "Bu siti",
      type: "Self-paced Learning",
      date: "Selasa",
      material: "Fisika Dasar",
    },
  ];
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === "courses") {
      navigate("/courses");
    } else if (tab === "schedule") {
      navigate("/schedule");
    } else if (tab === "announcements") {
      navigate("/announcements");
    } else if (tab === "assignments") {
      navigate("/assignments");
    } else if (tab === "dashboard") {
      navigate("/");
    }
  };

  const renderSchedule = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Jadwal pelajaran</h2>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option value="all">Semua Mata Pelajaran</option>
            <option value="math">Matematika</option>
            <option value="physics">Fisika</option>
            <option value="english">Bahasa Inggris</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option value="all">Semua Status</option>
            <option value="pending">Belum Selesai</option>
            <option value="completed">Selesai</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{item.subject}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.type}</p>
              <p className="text-sm text-gray-500">{item.teacher}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.material}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const renderAssignments = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Daftar Tugas</h2>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option value="all">Semua Mata Pelajaran</option>
            <option value="math">Matematika</option>
            <option value="physics">Fisika</option>
            <option value="english">Bahasa Inggris</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option value="all">Semua Status</option>
            <option value="pending">Belum Selesai</option>
            <option value="completed">Selesai</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{assignment.title}</h3>
                <p className="text-gray-600">{assignment.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Deadline:{" "}
                    {new Date(assignment.dueDate).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span>|</span>
                  <span>Pengajar: {assignment.instructor}</span>
                  <span>|</span>
                  <span>Mata Pelajaran: {assignment.subject}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {assignment.status === "completed" ? (
                  <span className="flex items-center gap-1 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                    Selesai
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-orange-500">
                    <Clock className="w-5 h-5" />
                    Belum Selesai
                  </span>
                )}
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  {assignment.status === "completed"
                    ? "Lihat Submission"
                    : "Kerjakan"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            E-Learning Platform
          </h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-lg ">
              <Users className="w-5 h-5" />
              Profile
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
                onClick={() => handleNavigation("dashboard")}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === "dashboard"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => handleNavigation("courses")}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === "courses"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Video className="w-5 h-5" />
                <span>Kelas</span>
              </button>
              <button
                onClick={() => setActiveTab("assignments")}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === "assignments"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Tugas</span>
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  activeTab === "schedule"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>Jadwal</span>
              </button>
            </nav>
          </div>

          <div className="col-span-10">
            {activeTab === "dashboard" && (
              <>
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Selamat Datang, Ashraf
                  </h2>
                  <p className="text-gray-600">
                    Lanjutkan pembelajaran Anda hari ini.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg shadow overflow-hidden"
                    >
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Pengajar: {course.instructor}
                        </p>
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

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold mb-4">Pengumuman</h2>
                    <div className="space-y-4">
                      {announcements.map((announcement) => (
                        <div key={announcement.id} className="border-b pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">
                                {announcement.title}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                {announcement.content}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500">
                              {announcement.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold mb-4">Tugas Terdekat</h2>
                    <div className="space-y-4">
                      {assignments
                        .filter((assignment) => assignment.status === "pending")
                        .slice(0, 2)
                        .map((assignment) => (
                          <div key={assignment.id} className="border-b pb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">
                                  {assignment.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {assignment.description}
                                </p>
                                <p className="text-sm text-orange-500 mt-1">
                                  Deadline:{""}
                                  {new Date(
                                    assignment.dueDate
                                  ).toLocaleDateString("id-ID")}
                                </p>
                              </div>
                              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                                Kerjakan
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "assignments" && renderAssignments()}
            {activeTab === "schedule" && renderSchedule()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElearningPlatform;

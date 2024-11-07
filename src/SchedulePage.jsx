import React from "react";
import { Card, CardContent } from "./Components/Card";
import { Calendar, Clock, Book, User, Video } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
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
      teacher: "Prof. John Smith",
      type: "Self-paced Learning",
      date: "Senin",
      material: "Business English",
    },
    {
      id: 3,
      subject: "Pemrograman Web",
      time: "13:00 - 14:30",
      teacher: "Ir. Budi Santoso",
      type: "Interactive Session",
      date: "Selasa",
      material: "React & Tailwind",
    },
  ];

  const renderSchedule = (schedule) => (
    <Card
      key={schedule.id}
      className="w-full md:w-1/2 lg:w-1/3 my-4 p-4"
      onClick={() => {}}
    >
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{schedule.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{schedule.time}</span>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          {schedule.subject}
        </h2>
        <p className="text-gray-600">{schedule.teacher}</p>
        <p className="text-gray-600">{schedule.type}</p>
        <p className="text-gray-600">{schedule.material}</p>
      </CardContent>
    </Card>
  );

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === "courses") {
      navigate("/courses");
    } else if (tab === "dashboard") {
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Jadwal E-Learning
        </h1>

        <div className="mb-6 flex flex-wrap gap-2">
          <select className="px-4 py-2 border rounded-lg bg-white shadow-sm">
            <option>Semua Hari</option>
            <option>Senin</option>
            <option>Selasa</option>
            <option>Rabu</option>
            <option>Kamis</option>
            <option>Jumat</option>
          </select>

          <select className="px-4 py-2 border rounded-lg bg-white shadow-sm">
            <option>Semua Mata Pelajaran</option>
            <option>Matematika</option>
            <option>Bahasa Inggris</option>
            <option>Pemrograman</option>
          </select>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scheduleData.map((schedule) => (
            <Card
              key={schedule.id}
              className="bg-white hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {schedule.subject}
                  </h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {schedule.date}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{schedule.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span>{schedule.teacher}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Video className="w-4 h-4 mr-2" />
                    <span>{schedule.type}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Book className="w-4 h-4 mr-2" />
                    <span>{schedule.material}</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  Masuk Kelas
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;

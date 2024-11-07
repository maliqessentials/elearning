import React from "react";
import { Calendar, CheckCircle, Clock } from "lucide-react";

const AssignmentView = () => {
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

  return (
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
};

export default AssignmentView;

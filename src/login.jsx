import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Key, ArrowLeft } from "lucide-react";

const AuthSystem = () => {
  const [currentView, setCurrentView] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([
    { id: 1, name: "Admin Test", email: "admin@test.com", role: "admin" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login attempt:", formData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const newUser = {
      id: users.length + 1,
      name: formData.name,
      email: formData.email,
      role: "student",
    };
    setUsers((prev) => [...prev, newUser]);
    alert("Registration successful!");
    setCurrentView("login");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Implement password reset logic here
    console.log("Reset password for:", formData.email);
    alert("If your email is registered, you will receive reset instructions.");
  };

  const handleDeleteAccount = (userId) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    }
  };

  const renderLogin = () => (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Login ke E-Learning
      </h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="masukkan email anda"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="masukkan password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center space-y-2">
        <button
          onClick={() => setCurrentView("register")}
          className="text-blue-500 hover:underline block w-full"
        >
          Buat akun baru
        </button>
        <button
          onClick={() => setCurrentView("resetPassword")}
          className="text-blue-500 hover:underline block w-full"
        >
          Lupa password?
        </button>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentView("login")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-center flex-1">
          Registrasi Akun Baru
        </h2>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Nama Lengkap
          </label>
          <div className="relative">
            <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan email"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Buat password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Konfirmasi Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Konfirmasi password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Daftar
        </button>
      </form>
    </div>
  );

  const renderResetPassword = () => (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentView("login")}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-center flex-1">
          Reset Password
        </h2>
      </div>

      <form onSubmit={handleResetPassword} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan email terdaftar"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Kirim Link Reset Password
        </button>
      </form>
    </div>
  );

  const renderUserManagement = () => (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Manajemen Pengguna</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteAccount(user.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {currentView === "login" && renderLogin()}
      {currentView === "register" && renderRegister()}
      {currentView === "resetPassword" && renderResetPassword()}
      {currentView === "userManagement" && renderUserManagement()}
    </div>
  );
};

export default AuthSystem;

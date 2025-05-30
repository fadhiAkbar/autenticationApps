import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header } from "../../components";

import "./mainApp.scss";

const MainApp = () => {
  // Inisialisasi user dengan null. Ini lebih eksplisit untuk "tidak ada user".
  const [user, setUser] = useState(null);
  // Tambahkan state isLoading untuk menandakan apakah proses pengecekan localStorage sedang berjalan
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        // Jika ada data, coba parse
        setUser(JSON.parse(userData));
      } catch (error) {
        // Tangani error jika data di localStorage tidak valid JSON
        console.error("Error parsing user data from localStorage:", error);
        // Jika parsing gagal, anggap tidak ada user dan pastikan state user adalah null
        setUser(null);
      }
    } else {
      // Jika tidak ada data di localStorage (null atau undefined), set user ke null secara eksplisit
      setUser(null);
    }
    // Setelah selesai memeriksa localStorage, set isLoading menjadi false
    setIsLoading(false);
  }, []); // Dependency array kosong agar hanya berjalan sekali saat komponen di-mount

  // Tampilkan loading spinner atau null selama proses pengecekan
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Gunakan kondisi ini untuk navigasi. Jika user null (tidak ada data atau parsing gagal), maka navigate.
  // Pastikan ini berjalan setelah useEffect selesai memeriksa localStorage dan isLoading false.
  if (user === null) {
    navigate("/login");
    // Penting: return null agar tidak merender konten
    // sebelum navigasi selesai atau user data dipastikan.
    return null;
  }

  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Selamat Datang di RT 02</h1>
            <p className="text-lg mb-8">Bersama membangun lingkungan yang lebih baik.</p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div>
            <img
              src="ertero-removebg-preview.png"
              alt="Foto Ketua RT"
              className="rounded-lg shadow-lg"
              width="300"
              height="300"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800">Kata Sambutan Ketua RT</h2>
            <p className="mt-4 text-gray-600">
              Selamat datang di website resmi RT 05. Kami berkomitmen untuk menjaga kebersihan,
              keamanan, dan kenyamanan lingkungan kita. Terima kasih atas partisipasi dan dukungan
              dari seluruh warga.
            </p>
            <p className="mt-4 text-gray-600">
              Bersama kita bisa membangun lingkungan yang harmonis dan sejahtera. Mari terus jaga
              kebersamaan dan gotong royong di lingkungan kita.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <aside className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pengumuman 1</h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold">Rapat Warga</p>
                <p className="text-gray-600">
                  Rapat warga akan dilaksanakan pada hari Minggu, 20 Agustus 2024, di Balai Warga.
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold">Kerja Bakti</p>
                <p className="text-gray-600">
                  Kerja bakti membersihkan lingkungan akan diadakan pada Sabtu, 26 Agustus 2024,
                  pukul 07:00 WIB.
                </p>
              </li>
              <li className="pb-4">
                <p className="font-semibold">Posyandu</p>
                <p className="text-gray-600">
                  Posyandu akan dilaksanakan pada hari Rabu, 30 Agustus 2024, pukul 08:00 WIB, di
                  Posyandu RT 05.
                </p>
              </li>
            </ul>
          </aside>
        </div>

        <div className="md:col-span-1">
          <aside className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pengumuman 2</h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold">Rapat Warga</p>
                <p className="text-gray-600">
                  Rapat warga akan dilaksanakan pada hari Minggu, 20 Agustus 2024, di Balai Warga.
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold">Kerja Bakti</p>
                <p className="text-gray-600">
                  Kerja bakti membersihkan lingkungan akan diadakan pada Sabtu, 26 Agustus 2024,
                  pukul 07:00 WIB.
                </p>
              </li>
              <li className="pb-4">
                <p className="font-semibold">Posyandu</p>
                <p className="text-gray-600">
                  Posyandu akan dilaksanakan pada hari Rabu, 30 Agustus 2024, pukul 08:00 WIB, di
                  Posyandu RT 05.
                </p>
              </li>
            </ul>
          </aside>
        </div>

        <div className="md:col-span-1">
          <aside className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pengumuman 3</h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold">Rapat Warga</p>
                <p className="text-gray-600">
                  Rapat warga akan dilaksanakan pada hari Minggu, 20 Agustus 2024, di Balai Warga.
                </p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold">Kerja Bakti</p>
                <p className="text-gray-600">
                  Kerja bakti membersihkan lingkungan akan diadakan pada Sabtu, 26 Agustus 2024,
                  pukul 07:00 WIB.
                </p>
              </li>
              <li className="pb-4">
                <p className="font-semibold">Posyandu</p>
                <p className="text-gray-600">
                  Posyandu akan dilaksanakan pada hari Rabu, 30 Agustus 2024, pukul 08:00 WIB, di
                  Posyandu RT 05.
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Peta Lokasi</h2>
        <div className="h-64 bg-gray-300 rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.6644702195229!2d107.01316566950837!3d-6.176533166292952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTAnMzUuNSJTIDEwN8KwMDAnNDkuNyJF!5e0!3m2!1sid!2sid!4v1723805905104!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

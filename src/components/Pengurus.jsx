import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Pengurus = () => {
  return (
    <>
        <Navbar />
        <section className="max-w-7xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Susunan Pengurus RT</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* <!-- Ketua RT --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl mb-4">
          K
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Ketua RT</h3>
        <h4 className="text-base font-semibold text-gray-800">Nur Fajar Dwi Raharjo</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Wakil Ketua --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl mb-4">
          WK
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Wakil Ketua</h3>
        <h4 className="text-base font-semibold text-gray-800">I Wayan Suwastika</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Sekretaris --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl mb-4">
          S
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Sekretaris</h3>
        <h4 className="text-base font-semibold text-gray-800">Novrizal Kurniawan</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Bendahara 1 --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl mb-4">
          B1
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Bendahara 1</h3>
        <h4 className="text-base font-semibold text-gray-800">Aldi</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Bendahara 2 --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl mb-4">
          B2
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Bendahara 2</h3>
        <h4 className="text-base font-semibold text-gray-800">Teguh Herianto</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Seksi Keamanan --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SK
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Keamanan</h3>
        <h4 className="text-base font-semibold text-gray-800">Isman</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Seksi Rohani Islam --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SPI
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Rohani Islam</h3>
        <h4 className="text-base font-semibold text-gray-800">Pipin Supriatna</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SPI
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Rohani Islam</h3>
        <h4 className="text-base font-semibold text-gray-800">Syofyan</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Seksi Pemuda dan Olahraga --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SPO
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Pemuda dan Olahraga</h3>
        <h4 className="text-base font-semibold text-gray-800">Teguh Herianto</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SPO
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Pemuda dan Olahraga</h3>
        <h4 className="text-base font-semibold text-gray-800">Pondra Sadewa</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Seksi Arisan dan Kesra --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SAK
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Arisan dan Kesra</h3>
        <h4 className="text-base font-semibold text-gray-800">Cucu</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Seksi Sarana dan Prasarana --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SSP
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Saranan dan Prasana</h3>
        <h4 className="text-base font-semibold text-gray-800">Roni</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SSP
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Sarana dan Prasarana</h3>
        <h4 className="text-base font-semibold text-gray-800">Wijanarko</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* <!-- Seksi Humas --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SH
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Humas</h3>
        <h4 className="text-base font-semibold text-gray-800">Dedi Supriadi</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SH
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Humas</h3>
        <h4 className="text-base font-semibold text-gray-800">Suheriansyah</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SH
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Humas</h3>
        <h4 className="text-base font-semibold text-gray-800">Mahmudin</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl mb-4">
          SH
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">Seksi Humas</h3>
        <h4 className="text-base font-semibold text-gray-800">Suparman</h4>
        <div className="flex gap-2 mt-1">
            <a href="#" className="text-blue-600 icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-pink-500 icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-500 icon"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>

  </section>
        <Footer />
    </>
  )
}

export default Pengurus
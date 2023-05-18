import React from "react";
import "./hasiltest.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

function HasilTest() {
  const hasilTest = JSON.parse(localStorage.getItem("userTest"));

  if (!hasilTest) {
    return (
      <h1 className="loading">
        <span className="loader"></span>
      </h1>
    );
  }

  return (
    <>
      <Navbar />
      <div className="box-main-hasiltest">
        <h1 className="nama-kepribadian">
          {hasilTest.result.nama_kepribadian}
        </h1>
        ;
        <div className="box-rekomendasi">
          <h1 className="header-rekomendasi">
            Penjurusan Yang Sesuai Dengan Kepribadian Anda
          </h1>
          <p className="rekomendasi-jurusan">
            {hasilTest.result.rekomendasi_jurusan}
          </p>
        </div>
        <div className="box-deskripsi">
          <h1 className="header-deskripsi">
            Penjelasan Tentang Kepribadian Anda
          </h1>
          <p className="deskripsi">{hasilTest.result.deskripsi}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HasilTest;

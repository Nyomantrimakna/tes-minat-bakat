import React, { useEffect } from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import "./detailInformation.css";

function DetailInformation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="box-main-detail">
        <h1 className="header-informasi">Tunggu Update Kami Selanjutnya</h1>
        <p className="penjelasan-informasi">
          Terimakasih sudah mau menggunkan aplikasi kami, kami akan terus
          mengebangkan aplikasi ini kedepannya, jadi mohon dukungannya serta
          saran dan masukan yang dapat kalian berikan kepada kami
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default DetailInformation;

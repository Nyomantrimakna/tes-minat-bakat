import React from "react";
import { Link } from "react-router-dom";

function PopupLogin() {
  return (
    <>
      <div className="popup">
        <div className="window">
          <Link to="/" className="close-btn" title="close">
            <h2 className="error-login">
              Maaf terjadi kesalahan, mohon isi kolom dengan benar
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PopupLogin;

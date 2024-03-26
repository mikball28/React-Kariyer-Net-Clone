import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";
import userDb from "../json/userDb.json";

export default function Login({ user, setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  function handleSubmit() {
    const findedProfile = userDb.profiles.find(
      (profil) => profil.email === email
    );

    if (findedProfile) {
      setUser(`${findedProfile.email}`);
      navigate("/hesabim");
    } else {
      navigate("/giriş");
    }
  }

  return (
    <>
      <div className="d-flex login">
        <div className="login-left">
          <img
            src="https://aday-spage.mncdn.com/Knet_img_logo-with-circles.3942ee0.png?v=69448"
            alt=""
          />
        </div>
        <div className="login-right">
          <div className="login-title">Aday Üye Girişi</div>
          <div className="login-form">
            <div className="">
              <div className="form-social">
                <button className="form-button d-flex align-items-center justify-content-center">
                  <img
                    src="https://aday-spage.mncdn.com/Knet_img_google-icon.1a951fd.png?v=69448"
                    width={18}
                    alt=""
                  />{" "}
                  <span>Google</span>
                </button>
                <button className="form-button d-flex align-items-center justify-content-center">
                  <img
                    src="https://aday-spage.mncdn.com/Knet_img_facebook-icon-middle.1ce9951.png?v=69448"
                    width={18}
                    alt=""
                  />
                  <span>Facebook</span>
                </button>
                <button className="form-button d-flex align-items-center justify-content-center">
                  <img
                    src="https://aday-spage.mncdn.com/Knet_img_apple-black-logo.699c654.png?v=69448"
                    width={18}
                    alt=""
                  />
                  <span>Apple</span>
                </button>
              </div>
              <div className="seperator-container d-flex align-items-center mt-3 mb-3">
                <hr />
                <span>veya</span> <hr />
              </div>
              <form>
                <div className="login-input mt-3 mb-3">
                  <input
                    type="text"
                    className="inp"
                    placeholder="Kullanıcı adı veya E-posta"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="login-input">
                  <input
                    type="password"
                    className="inp"
                    placeholder="Şifre"
                  ></input>
                  <span class="material-symbols-outlined visb">visibility</span>
                </div>
                <div class="mt-3 mb-4 d-flex align-items-center justify-content-between">
                  <span class="check-left">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked
                    ></input>
                    <label
                      class="form-check-label check-label"
                      for="defaultCheck1"
                    >
                      Beni Hatırla
                    </label>
                  </span>
                  <span class="check-right">Şifremi Unuttum</span>
                </div>
                <div className="loginns">
                  <button onClick={() => handleSubmit()} className="">
                    Giriş Yap
                  </button>
                </div>
              </form>
              <p className="register-container">
                Kariyer.net’te özgeçmişin yok mu?<a href=""> Hemen Üye Ol</a>
              </p>
              <p className="pub-link">İşveren misin?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login-left">
        <div className="login-footer">
          <ul className="d-flex">
            <li>
              <a>Hakkımızda</a>
              <a>Yardım</a>
              <a>Veri Politikamız</a>
              <span>|</span>
            </li>
            <li>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              <span>|</span>
            </li>
            <li className="ml-2 ">
              <span className="copyr">Kariyer.net © 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

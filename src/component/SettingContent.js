import React from "react";

export default function SettingContent() {
  return (
    <>
      <div className="setting-main-content d-flex">
        <div className="setting-left-section">
          <div className="toc-menus">
            <div className="pt-3">
              <div className="toc-menus-button-active">Kişisel Bilgiler</div>
              <div class="line mt-3"></div>
            </div>
            <div className="pt-3">
              <div className="toc-menus-button">İletişim Bilgileri</div>
              <div class="line mt-3"></div>
            </div>
            <div className="pt-3">
              <div className="toc-menus-button">Şifreyi Değiştir</div>
              <div class="line mt-3"></div>
            </div>
            <div className="pt-3">
              <div className="toc-menus-button">E-posta Bildirimleri</div>
              <div class="line mt-3"></div>
            </div>
            <div className="pt-3">
              <div className="toc-menus-button">SMS Bildirimleri</div>
              <div class="line mt-3"></div>
            </div>
            <div className="pt-3">
              <div className="toc-menus-button">Reklam Görünürlüğü</div>
              <div class="line mt-3"></div>
            </div>
            <div className="pt-3">
              <div className="toc-menus-button">Hesap Silme ve Dondurma</div>
              <div class="line mt-3"></div>
            </div>
          </div>
        </div>
        <div className="setting-right-section">
          <div className="setting-title">Kişisel Bilgiler</div>
          <div className="setting-description">
            Bilgilerini düzenleyerek Kariyer.net hesabını güncel tutabilirsin.
          </div>
          <label className="mt-3">İsim</label>
          <div className="login-input mt-1">
            <input className="inp" placeholder={"MUHAMMED"}></input>
          </div>
          <label className="mt-3">Soy isim</label>
          <div className="login-input mt-1">
            <input className="inp" placeholder={"IKBAL"}></input>
          </div>
          <label className="mt-3">Yaşadığın yer</label>
          <div className="login-input mt-1">
            <input className="inp" placeholder={"İl ve İlçe İsmi"}></input>
          </div>
          <label className="mt-3">Doğum tarihi</label>
          <div className="login-input mt-1">
            <input className="inp" placeholder={"gg/aa/yyyy"}></input>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="inactive-button">Kaydet</button>
          </div>
        </div>
      </div>
    </>
  );
}

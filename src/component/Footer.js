import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <ul>
                  <div className="footer-title">SİTE KULLANIMI</div>
                  <li>Genel Koşullar</li>
                  <li>Maaş Hesaplama</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <ul>
                  <div className="footer-title">VERİ POLİTİKAMIZ</div>
                  <li>Aday Üyelik Aydınlatma Metni</li>
                  <li>Çalışan Aydınlatma Metni</li>
                  <li>İşveren Müşteri Temsilcisi</li>
                  <li>Aydınlatma Metni</li>
                  <li>Tedarikçi/İş Ortağı Temsilcisi</li>
                  <li>Aydınlatma Metni</li>
                  <li>Bilgi Güvenliği Politikası</li>
                  <li>Çerez Politikası</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <ul>
                  <div className="footer-title">YARDIM</div>
                  <li>Sorum Var</li>
                  <li>Önerim Var</li>
                  <li>Sık Sorulan Sorular</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <ul>
                  <div className="footer-title">HAKKIMIZDA</div>
                  <li>Hakkımızda</li>
                  <li>Reklam Verin</li>
                  <li>İletişim</li>
                  <li>İlan Satın Al</li>
                  <li>Kariyer Rehberi</li>
                  <li>İK Blog</li>
                  <li>İşin Olsun</li>
                </ul>
              </div>
              <div className="col-lg-2">
                <ul>
                  <div className="footer-title">SOSYAL MEDYA</div>
                  <li>
                    <i class="fa-brands fa-square-facebook"></i>Facebook
                  </li>
                  <li>
                    <i class="fa-brands fa-twitter"></i>Twitter
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>Instagram
                  </li>
                  <li>
                    <i class="fa-brands fa-youtube"></i>Youtube
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <img
                  src="https://aday-spage.mncdn.com/Knet_img_gptw-footer-new.25aa646.png?v=69286"
                  alt=""
                  width={82.26}
                  height={123}
                />
              </div>
            </div>
            <div className="ads d-flex align-items-center mb-0">
              <span>Kariyer.net ile İş Cebinizde</span>
              <img
                src="https://aday-spage.mncdn.com/Knet_img_app-store.0f13ed4.svg?v=69286"
                alt=""
              />
              <img
                src="https://aday-spage.mncdn.com/Knet_img_google-play.f2ca834.png?v=69286"
                alt=""
                height={37}
                width={124}
              />
            </div>

            <hr />

            <div className="footer-down d-flex align-items-center">
              <div>
                <img
                  src="https://aday-spage.mncdn.com/Knet_img_web_logo.fad3319.png?v=69286"
                  height={30}
                  width={130}
                  alt=""
                />
                <div className="copyright mt-3">
                  Copyright © 1999-2024 Kariyer.net
                </div>
              </div>
              <div className="footer-down-right">
                <span>Arabam.com - ChemOrbis - Cimri.com - Emlakjet - Hangikredi.com -
                Neredekal.com - Sigortam.net - SteelOrbis<span className="space"></span>
                Kariyer.net bir</span> <img src="https://aday-spage.mncdn.com/Knet_img_ilab-logo.afbe989.svg?v=69448" className="ilab" width={60} height={22} alt=""/> <span>grup şirketidir.</span>
              </div>
            </div>

            <div className="footer-fnish d-flex align-items-center ">
              <img
                src="https://aday-spage.mncdn.com/Knet_img_iskur.8814028.png?v=69286"
                width={57}
                height={55}
                alt=""
              />
              <span>
                Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş.
                Özel İstihdam Bürosu Olarak 31/08/2021-30/08/2024 tarihleri
                arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından
                17/08/2021 tarih ve 9317662 sayılı karar uyarınca 170 nolu belge
                ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş
                arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir.
                Şikayetleriniz için aşağıdaki telefon numaralarına
                başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu
                İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul
                Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

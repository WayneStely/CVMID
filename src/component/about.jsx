const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
            am freshman student of Klabat University majoring Computer Science Informatics.I am really good at FLSN(POSTER), I've won a lot of province and city FLSN competitions and Olympiads Geography and Economics.My hobby is playing basketball and watching. I watching random movie, as long as it is informative
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="../../public/stellyprofil.jpeg"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>DATA SCIENTIST</h3>
              <p className="fst-italic">
              Data scientist adalah seorang profesional yang memiliki keahlian dalam mengumpulkan, menganalisis, dan menginterpretasikan data untuk membantu organisasi atau bisnis membuat keputusan yang lebih baik
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>20 JUNE 2002</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.res.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>nomor telepon:</strong>{" "}
                      <span>0882011682477</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>kota:</strong> <span>BITUNG</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>umur:</strong> <span>21</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>sarjana:</strong>{" "}
                      <span>sarjana komputer (s1)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>email:</strong> <span>waynestely20@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>tidak tersedia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              Saat saya terus menjelajahi lanskap teknologi yang selalu berkembang, saya merasakan kepuasan besar dalam menantang batasan-batasan analisis data dan pengembangan model. Perjalanan saya melampaui angka dan statistik; ini tentang menciptakan pemahaman yang mendalam antara data dan pengambilan keputusan yang relevan. Dengan perpaduan kreativitas dan keahlian teknis, saya berkomitmen untuk membentuk masa depan analisis data, memastikan bahwa setiap insight meninggalkan dampak yang signifikan. Bergabunglah dalam petualangan menarik ini, di mana inovasi bertemu dengan pemahaman mendalam, dan bersama-sama, kita dapat mendefinisikan ulang cara orang berinteraksi dengan dunia data.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};
export default About;

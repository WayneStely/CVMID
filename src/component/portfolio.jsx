import uiuxjpg from "/src/ui-ux-1.jpg"
import uiuxduajpg from "/src/ui-ux-2.jpg"
import frontendjpg from "/src/frontend.jpg"
const Portfolio = () => {
    return (
        <div>
             {/* ======= Portfolio Section ======= */}
<section id="portfolio" className="portfolio section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Portfolio</h2>
      <p>Dalam portofolio saya, Anda akan menemukan pameran dinamis dari keahlian saya dalam Data Scientist, di mana setiap proyek menceritakan kisah wireframing yang teliti, prototyping inovatif, dan riset berorientasi pengguna. Saat Saya menjelajahi bagian frontend.</p>
    </div>
    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={uiuxjpg} className="img-fluid" alt />
          <div className="portfolio-links">
            <a href="../..public/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <div className="portfolio-wrap">
          <img src={uiuxduajpg} className="img-fluid" alt />
          <div className="portfolio-links">
            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src={frontendjpg} className="img-fluid" alt />
          <div className="portfolio-links">
            <a src="../..public/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>{/* End Portfolio Section */}

        </div>
    )
}
export default Portfolio;
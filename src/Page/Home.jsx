import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="hero" class="banner vh-100 d-flex align-items-center">
        <div class="container text-white">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-12 justify-content-center banner-mid">
              <div class="d-flex flex-column align-items-center">
                <div className="d-flex mb-1">
                  <img
                    src="assets/img/Logoo.png"
                    alt="Logo"
                    class="logo-banner"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      width: "8rem",
                    }}
                  />
                  <h1
                    class="font-weight-bolder text-white text-banner"
                    style={{
                      paddingTop: "2.3rem",
                      paddingLeft: "0.5rem",
                    }}>
                    MALAYAPURA
                  </h1>
                </div>
                <p className="text-center ket-banner">
                  Our company will lead the export of high-quality spices from
                  West Sumatra, which will have a positive impact on farmers and
                  the economy. We highly prioritize quality and our customers'
                  trust to establish long-term partnerships in the future.
                </p>
                <p class="font-italic">Your partner for high quality spices</p>
                <div className="d-flex mt-3">
                  <a class="btn btn-secondary shadow-lg mr-2" href="#product">
                    Product
                  </a>
                  <a
                    class="btn btn-success shadow-lg"
                    target="_blank"
                    href="https://wa.me/6281365705824">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" class="about mb-5">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-12 d-flex flex-column justify-contents-center"
                data-aos="fade-left">
                <div class="content pt-4 pt-lg-0">
                  <h3 class="font-weight-bolder text-center">About</h3>
                  <p>
                    PT Malayapura Spices Group (Malayapura) is an
                    Indonesian-registered international spice producer and
                    exporter that specializes in wholesale agricultural
                    products, plantations, and general commodities. Our company
                    is run by experts and has a dedicated team to serve our
                    customers with procurement and sourcing services. We obtain
                    high-quality agricultural goods from a large network of
                    approved farmers and supply them to our clients. Our
                    commitment to quality, trustworthiness, and consistency has
                    earned us a reputation as a reliable provider of
                    agricultural, plantation, and other general commodities.
                  </p>
                  <p>
                    PT Malayapura is committed to sustainable business
                    practices. Consequently, certification is a crucial element
                    of our journey toward sustainability. As a business entity,
                    certification provides vital information about our
                    performance and areas where we need to continue to improve
                    to enhance efficiency and productivity. We also work closely
                    with our logistics and shipping partners to ship our
                    products internationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="services section-bg">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h4 className="font-weight-bolder">
                PROMOTE INDONESIAN AGRICULTURE TO MARKET INTERNATIONALLY
              </h4>
            </div>
            <div class="row">
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink">
                  <div class="icon">
                    <i class="bx bx-home"></i>
                  </div>
                  <h4 class="title">
                    <a href="">SUSTAINABILITY</a>
                  </h4>
                  <p class="description">
                    We believe in taking a long-term, well-balanced approach to
                    furthering our objectives. In order to realize our company's
                    goal and objectives, we believe in environmental, social,
                    and economic sustainability.
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="100">
                <div class="icon-box icon-box-cyan">
                  <div class="icon">
                    <i class="bx bx-chart"></i>
                  </div>
                  <h4 class="title">
                    <a href="">INTEGRITY</a>
                  </h4>
                  <p class="description">
                    We are honest and demonstrate a consistent, uncompromising
                    adherence to strong moral and ethical principles and values.
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="200">
                <div class="icon-box icon-box-green">
                  <div class="icon">
                    <i class="bx bx-user"></i>
                  </div>
                  <h4 class="title">
                    <a href="">COMMITMENT</a>
                  </h4>
                  <p class="description">
                    We are always committed to what is offered in accordance
                    with the agreement between investors in order to reach a
                    sustainable agreement
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-arrow-from-bottom"></i>
                  </div>
                  <h4 class="title">
                    <a href="">PERFECTION</a>
                  </h4>
                  <p class="description">
                    We work by always paying attention to important aspects in a
                    partnership so that there are no mistakes in a cooperative
                    relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" class="features">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item" data-aos="fade-up">
                    <a
                      class="nav-link active show"
                      data-toggle="tab"
                      href="#tab-1">
                      <h4 className="text-center">Bulk Order</h4>
                    </a>
                  </li>
                  <li
                    class="nav-item mt-2"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <a class="nav-link" data-toggle="tab" href="#tab-2">
                      <h4 className="text-center">Retail</h4>
                    </a>
                  </li>
                  <li
                    class="nav-item mt-2"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    <a class="nav-link" data-toggle="tab" href="#tab-3">
                      <h4 className="text-center">White Label</h4>
                    </a>
                  </li>
                  <li
                    class="nav-item mt-2"
                    data-aos="fade-up"
                    data-aos-delay="300">
                    <a class="nav-link" data-toggle="tab" href="#tab-4">
                      <h4 className="text-center">Free Sample</h4>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <figure>
                      <img
                        src="assets/img/features-1.png"
                        alt=""
                        class="img-fluid"
                      />
                    </figure>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <figure>
                      <img
                        src="assets/img/features-2.png"
                        alt=""
                        class="img-fluid"
                      />
                    </figure>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <figure>
                      <img
                        src="assets/img/features-3.png"
                        alt=""
                        class="img-fluid"
                      />
                    </figure>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <figure>
                      <img
                        src="assets/img/features-4.png"
                        alt=""
                        class="img-fluid"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" class="cta">
          <div class="container">
            <div class="row" data-aos="zoom-in">
              <div class="col-lg-9 text-center text-lg-left">
                <p>
                  Empowering Society (Especially Women and Young People) Opening
                  New Opportunities Creating Economic Values For Society,
                  Company and Country prospering Indonesian agriculture
                </p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a
                  class="btn btn-success"
                  target="_blank"
                  href="https://wa.me/6281365705824">
                  Call to WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="product" class="testimonials">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h2 class="font-weight-bolder">PRODUCT</h2>
              <p>
                Our product is the outcome of agriculture, primarily spices, as
                West Sumatra is renowned for its cuisine rich in spices, beloved
                by people throughout Indonesia. Delicious food undoubtedly
                originates from a blend of high-quality ingredients and
                formulations. This is why West Sumatra is recognized as one of
                the best spice-producing regions in Indonesia.
              </p>
            </div>
            <div class="card-deck">
              <div class="col-md-12 mb-3">
                <div class="card h-100 shadow" data-aos="fade-bottom">
                  <div className="row px-3">
                    <div className="col-md-4">
                      <img
                        src="assets/img/zipmalaya/4.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title font-weight-bolder">Cloves</h5>
                        <p class="card-text">
                          Our cloves are of very high quality. We process them
                          from the initial harvesting, separating the stems from
                          the fruit, then drying them until they are thoroughly
                          dried. After that, we meticulously sort the dried
                          cloves to ensure the highest quality, known as AB6,
                          for both local and international markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <div class="card h-100 shadow" data-aos="fade-bottom">
                  <div className="row px-3">
                    <div className="col-md-4">
                      <img
                        src="assets/img/zipmalaya/3.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title font-weight-bolder">
                          Cacao Bean
                        </h5>
                        <p class="card-text">
                          Our cocoa beans maintain exceptional quality because
                          we educate our partner farmers to produce high-quality
                          cocoa fruits. We also guide farmers in processing the
                          harvested fruits, from the harvesting process to
                          drying and storage, ensuring a perfect final product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="card h-100 shadow" data-aos="fade-bottom">
                  <div className="row px-3">
                    <div className="col-md-4">
                      <img
                        src="assets/img/zipmalaya/5.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title font-weight-bolder">
                          Split Betelnut
                        </h5>
                        <p class="card-text">
                          Betel nuts are a very common commodity from Sumatra.
                          What sets our betel nut products apart is that we have
                          experts in betel nut processing, from harvesting,
                          drying, and efficient quality sorting methods to
                          produce the best quality. We also continually guide
                          our partner farmers on proper and effective betel nut
                          processing techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="activities">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2 class="font-weight-bolder">IMPACT</h2>
              <p>
                Our company is deeply committed to making a positive impact on
                the local community. Not only do we facilitate farmers in
                selling their produce at satisfying prices, but we also provide
                job opportunities for individuals, including mothers and fathers
                who are struggling to increase their income. This is where we
                play a role in helping them by offering employment opportunities
                to support them in earning additional income.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img
                  src="assets/img/impact/11.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Boat on Calm Water"
                />
              </div>
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img
                  src="assets/img/impact/22.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Boat on Calm Water"
                />
              </div>
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img
                  src="assets/img/impact/55.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Boat on Calm Water"
                />
              </div>
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img
                  src="assets/img/impact/44.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Boat on Calm Water"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sample" className="activities mb-5">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2 class="font-weight-bolder text-white">SAMPLE</h2>
            </div>
            <div class="row sample">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                  src="assets/img/sample/1.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Boat on Calm Water"
                />

                <img
                  src="assets/img/sample/2.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Wintry Mountain Landscape"
                />
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="assets/img/sample/3.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Mountains in the Clouds"
                />

                <img
                  src="assets/img/sample/4.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Boat on Calm Water"
                />
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="assets/img/sample/5.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Waves at Sea"
                />

                <img
                  src="assets/img/sample/6.png"
                  class="w-100 shadow-1-strong rounded mb-4 sample-img mx-auto d-block"
                  alt="Yosemite National Park"
                />
              </div>
            </div>

            {/* <div
              id="carouselExampleControlsNoTouching"
              class="carousel slide mx-auto"
              data-bs-touch="false"
              data-bs-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="assets/img/sample/1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/img/sample/2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/img/sample/3.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/img/sample/4.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/img/sample/5.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="assets/img/sample/6.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev">
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"></span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next">
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"></span>
              </button>
            </div> */}
          </div>
        </section>

        <section id="partner" class="services section-bg">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h2 class="font-weight-bolder">PARTNER</h2>
            </div>
            <div class="row">
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/Mitra.png" alt="" />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/Kementerian.png" alt="" />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/je.png" alt="" />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/me.png" alt="" />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/chen.jpg" alt="" />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/bi.png" alt="" />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img
                    src="assets/img/partner/ba.png"
                    alt=""
                    class="v-partner-img"
                  />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img
                    src="assets/img/partner/Coat.png"
                    alt=""
                    class="v-partner-img"
                  />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img
                    src="assets/img/partner/Ministry.png"
                    alt=""
                    class="v-partner-img"
                  />
                </div>
              </div>
              <div
                class="col-sm-12 col-md-4 col-lg-3 d-flex align-items-center partner mb-5"
                data-aos="zoom-in">
                <div class="icon-box icon-box-pink box-partner">
                  <img src="assets/img/partner/be.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact section-bg">
          <div class="container">
            <div class="section-title" data-aos="fade-up">
              <h2 class="font-weight-bolder">CONTACT US</h2>
            </div>

            <div class="row">
              <div
                class="col-lg-5 d-flex align-items-stretch"
                data-aos="fade-right">
                <div class="info">
                  <div class="address">
                    <i class="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>
                      Simpang pulai, Kec. Kubung, Kota Solok, Sumatera Barat
                      27361
                    </p>
                  </div>

                  <div class="email">
                    <i class="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>admin@malayaspice.com</p>
                  </div>

                  <div class="phone">
                    <i class="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+62 813-6570-5824</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1908.9999743442786!2d100.67636960894689!3d-0.8092590284804644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b332820066dc7%3A0xd9bf256390c0471f!2sPT%20Malayapura%20Spice%20Group!5e1!3m2!1sid!2sid!4v1727791247998!5m2!1sid!2sid"
                    className="w-100 h-50"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

              <div
                class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
                data-aos="fade-left">
                <form
                  action="#"
                  method="post"
                  role="form"
                  class="bg-white w-100 p-3">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div class="validate"></div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div class="validate"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea
                      class="form-control"
                      name="message"
                      rows="10"
                      data-rule="required"
                      data-msg="Please write something for us"></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="text-center">
                    <button type="submit" className="btn btn-secondary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;

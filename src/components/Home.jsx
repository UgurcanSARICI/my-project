import { slide1, slide2, slide3 } from "../assets/images";
const Home = () => {
  return (
    <div>
      <div className="slide relative">
        <div className="main-slide swiper-container">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <div className="flex flex-col-reverse slide-box relative">
                <img src={slide1} alt="picture" />
                <div className="slide-box-on sm:absolute flex items-center">
                  <div className="container mx-auto">
                    <div className="slide-box-on-content relative z-10">
                      <span className="block">
                        Yeni Sezon
                        <br />
                        Güneş Gözlükleri
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat, suscipit, obcaecati aliquam quisquam, ipsa
                        provident nisi repellat optio atque saepe voluptate
                        architecto. Deserunt, voluptatum tempore.
                      </p>
                      <a className="inline-flex items-center" href="">
                        <span className="flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                        Alışverişe Başla
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div className="slide-box relative">
                <img src={slide3} alt="pic" />
                <div className="slide-box-on absolute flex items-center">
                  <div className="container mx-auto">
                    <div className="slide-box-on-content relative z-10">
                      <span className="block">
                        Yeni Sezon
                        <br />
                        Güneş Gözlükleri
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat, suscipit, obcaecati aliquam quisquam, ipsa
                        provident nisi repellat optio atque saepe voluptate
                        architecto. Deserunt, voluptatum tempore.
                      </p>
                      <a className="inline-flex items-center" href="">
                        <span className="flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                        Alışverişe Başla
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="main-slide-arrow flex">
            <button
              className="flex items-center justify-center focus:outline-none main-slide-prev absolute z-50"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              className="flex items-center justify-center focus:outline-none main-slide-next absolute z-50"
              tabindex="0"
              role="button"
              aria-label="Next slide"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

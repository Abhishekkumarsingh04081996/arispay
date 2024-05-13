import Container from "../Container";

import "./discover.css";

export default function Discover() {
  return (
    <div>
      <Container className="py-20 max-sm:py-10">
        <h4 className="text-[2.5rem] text-white sm:text-3xl xl:text-4xl font-bold leading-tight capitalize text-center max-sm:text-2xl mb-16 max-sm:mb-10">
          Discover Our EcoSystem
        </h4>
        <div className="discover-container">
          <div className="card dis-left  border border-[#3D84F529] bg-[#101624] overflow-hidden rounded-xl transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] relative">
            <img src="/assets/security.svg" className="pt-24 " alt="" />

            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title text-xl font-semibold">
                    Security
                  </h3>
                </div>
              </div>
              <p className="card__description">
                Fortifying financial security through the shield of crypto.
              </p>
            </div>
          </div>
          <div className="card top-left border border-[#3D84F529] bg-[#101624] overflow-hidden rounded-xl transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] relative">
            <div className="flex justify-center w-full">
              {" "}
              <div className="w-fit">
                <img src="/assets/integration.svg" alt="" className="w-56" />
              </div>
            </div>
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title text-xl font-semibold">
                    Integration
                  </h3>
                </div>
              </div>
              <p className="card__description">
                Powering seamless integration with the future of finance through
                crypto.
              </p>
            </div>
          </div>
          <div className="card top-right border border-[#3D84F529] bg-[#101624] overflow-hidden rounded-xl transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] relative">
            <div className="flex justify-center w-full">
              {" "}
              <div className="w-fit">
                <img src="/assets/ease.svg" alt="" className="h-56 " />
              </div>
            </div>

            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title text-xl font-semibold">Ease</h3>
                </div>
              </div>
              <p className="card__description">
                Unlocking financial ease through crypto's simplicity.
              </p>
            </div>
          </div>
          <div className="card bottom border border-[#3D84F529] bg-[#101624] overflow-hidden rounded-xl transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] relative">
            <div className="flex justify-center w-full">
              {" "}
              <div className="w-fit">
                <img src="/assets/rewards.svg" alt="" className="h-56" />
              </div>
            </div>
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div className="card__header-text">
                  <h3 className="card__title text-xl font-semibold">
                    Loyality Rewards
                  </h3>
                </div>
              </div>
              <p className="card__description">
                Earning loyalty rewards through the innovation of crypto
                incentives.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

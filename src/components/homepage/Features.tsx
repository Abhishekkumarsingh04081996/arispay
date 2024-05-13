import Container from "../Container";
import blocks from "../../assets/blocks.json";
import "./style.css";

export default function Features() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: blocks,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="relative ">
      <Container className="py-20 max-sm:py-10">
        <h4 className="text-[2.5rem] text-white sm:text-3xl xl:text-4xl font-bold leading-tight capitalize text-center max-sm:text-2xl mb-16 max-sm:mb-10">
          Features
        </h4>

        <div className="relative flex justify-between max-sm:flex-col-reverse mb-12  border border-[#3D84F529] bg-[#101624] pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] p-5 rounded-2xl backdrop-blur-xl bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-[#D1D7E1] md:text-4xl">
              Swap
            </h2>
            <p className="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg  max-sm:text-xs max-sm:font-normal max-sm:text-xs max-sm:font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum, distinctio laborum repellat ipsa dolor saepe soluta odit,
              optio, corrupti in velit libero cum quia natus aspernatur
              repudiandae consectetur laudantium! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi odit et reprehenderit eligendi
              laudantium molestiae eos corporis iusto, adipisci ipsum deleniti
              debitis facere nulla atque odio nisi molestias, vitae praesentium.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              className="w-1/2 mb-[-36px] heartbeat"
              src="/assets/swap.png"
              alt=""
            />
            <img src="/assets/green_glass.svg" alt="" />
          </div>
        </div>

        <div className="relative flex justify-between max-sm:flex-col mb-12  border border-[#3D84F529] bg-[#101624] pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] p-5 rounded-2xl backdrop-blur-xl bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]">
          <div className="flex-1 flex flex-col items-center">
            <img className="w-1/3 rotate" src="/assets/coin.png" alt="" />
            <img src="/assets/yellow_glass.svg" alt="" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-[#D1D7E1] md:text-4xl">
              Multi Currency
            </h2>

            <p className="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg  max-sm:text-xs max-sm:font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum, distinctio laborum repellat ipsa dolor saepe soluta odit,
              optio, corrupti in velit libero cum quia natus aspernatur
              repudiandae consectetur laudantium! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi odit et reprehenderit eligendi
              laudantium molestiae eos corporis iusto, adipisci ipsum deleniti
              debitis facere nulla atque odio nisi molestias, vitae praesentium.
            </p>
          </div>
        </div>

        <div className="relative flex justify-between max-sm:flex-col-reverse mb-12  border border-[#3D84F529] bg-[#101624] pt-4 md:pl-10 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] p-5 rounded-2xl backdrop-blur-xl bg-[radial-gradient(ellipse_at_center,_#1c3971_0%,transparent_70%)]">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-[#D1D7E1] md:text-4xl">
              Wallet
            </h2>

            <p className="mt-2 max-w-lg text-base font-medium text-[#FFFFFF]/[0.7] md:text-lg  max-sm:text-xs max-sm:font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              rerum, distinctio laborum repellat ipsa dolor saepe soluta odit,
              optio, corrupti in velit libero cum quia natus aspernatur
              repudiandae consectetur laudantium! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quasi odit et reprehenderit eligendi
              laudantium molestiae eos corporis iusto, adipisci ipsum deleniti
              debitis facere nulla atque odio nisi molestias, vitae praesentium.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              className="w-1/3 mb-[-4px] vibrate"
              src="/assets/wallet.png"
              alt=""
            />
            <img src="/assets/blue_glass.svg" alt="" className="mb-5" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function NextArrow(props: any) {
  return (
    <svg
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      className={props.className}
    >
      <path
        d="M0.578867 16.3897C-0.188431 15.5951 -0.166331 14.329 0.62823 13.5617L13.5763 1.05785C14.3709 0.290546 15.637 0.312647 16.4043 1.10721C17.1716 1.90177 17.1495 3.16791 16.355 3.9352L4.84554 15.0497L15.9601 26.5592C16.7274 27.3537 16.7053 28.6199 15.9107 29.3872C15.1162 30.1545 13.85 30.1324 13.0827 29.3378L0.578867 16.3897ZM4.98219 17.0524L1.98264 17.0001L2.05245 13.0007L5.05199 13.053L4.98219 17.0524Z"
        fill="#fff"
      />
    </svg>
  );
}

export function PrevArrow(props: any) {
  return (
    <svg
      width="17"
      height="30"
      viewBox="0 0 17 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
      className={props.className}
    >
      <path
        d="M16.4382 16.3897C17.2055 15.5951 17.1834 14.329 16.3889 13.5617L3.44074 1.05785C2.64618 0.290546 1.38004 0.312647 0.612745 1.10721C-0.154553 1.90177 -0.132453 3.16791 0.662107 3.9352L12.1715 15.0497L1.05701 26.5592C0.289713 27.3537 0.311813 28.6199 1.10637 29.3872C1.90093 30.1545 3.16707 30.1324 3.93437 29.3378L16.4382 16.3897ZM12.0349 17.0524L15.0344 17.0001L14.9646 13.0007L11.9651 13.053L12.0349 17.0524Z"
        fill="#fff"
      />
    </svg>
  );
}

import Container from "../components/Container";
import "./footer.css";
export default function Footer() {
  return (
    <div className=" relative h-48 overflow-hidden border-t">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute z-30 left-1/2  top-[-50px] h-[50rem] w-[50rem] opacity-50 pointer-events-none -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fill-opacity="0.7"
        ></circle>
        <defs>
          <radialGradient
            className="blur-lg"
            id="759c1415-0410-454c-8f7c-9a820de03641"
          >
            <stop stop-color="var(--cyan-800)"></stop>
            <stop offset="1" stop-color="var(--cyan-800)"></stop>
          </radialGradient>
        </defs>
      </svg>
      <Container>
        <div className="footer pt-5 flex flex-col justify-base items-base">
          <div className="flex justify-between items-center max-md:flex-col  max-md:justify-center">
            <div className="flex items-center">
              <img src="/assets/logo-o.png" className="w-12" alt="logo" />{" "}
              <p className="text-xl text-white font-bold uppercase">ArisPay</p>
            </div>

            <div className="text-white">
              <p>Join Our Community</p>
            </div>
            <div>
              <ul className="social flex gap-4 items-center">
                <li>
                  <img
                    src="/assets/telegram.svg"
                    className="h-10 cursor-pointer"
                  />
                </li>

                <li>
                  <img
                    src="/assets/twitter.svg"
                    className="h-10 cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

import Container from "../components/Container";
import FooterImage from "./footerimage";

const FooterList = [
  {
    aos: 'fade-right',

    texts: [
      {
        title: 'ABOUT',
        text1: 'terms of service',
        text2: 'blog',
        text3: 'brand assets',
        text4: 'careers'
      },
    ],
  },
  {
    aos: 'fade-right',
    texts: [
      {
        title: 'DEVELOPERS',
        text1: 'contributing',
        text2: 'github',
        text3: 'bug bounty',
        text4: ''
      },
    ],
  },
  {
    aos: 'fade-right',
    texts: [
      {
        title: 'SUPPORT',
        text1: 'contact',
        text2: 'troubleshooting',
        text3: 'documentation',
        text4: ''
      },
    ],
  },

];
export default function Footer() {
  return (
    <div className="pt-0">
      <Container className="flex flex-col items-end">
        <div className="mx-auto flex mt-4  w-full rounded-3xl overflow-hidden flex">
          {FooterList.map((Footer) => {
            return (
              <FooterCard
                aos={Footer.aos}
                texts={Footer.texts}
              ></FooterCard>
            );
          })}
        </div>
        <div className="mt-4 mb-8 flex">
          <div className="flex">
            <FooterImage />
          </div>

        </div>
      </Container>
    </div>

  );
}
interface IFooter {
  aos: string;
  texts: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  }[];
}
function FooterCard(props: IFooter) {
  return (

    <div className="w-1/4 text-white font-normal text-3xl text-center pt-4">
      <div className='relative w-full flex justify-center'>
        <div className='m-4'>
          {props.texts.map((e) => {
            return (
              <div className='mt-1 flex flex-col'>
                <span className='text-[#00B2F4] font-bold text-xl text-left uppercase'>{e.title}</span>
                <span className='text-white mt-4 text-sm font-normal text-gray-400 text-left uppercase'>{e.text1}</span>
                <span className='text-white mt-4 text-sm font-normal text-gray-400 text-left uppercase'>{e.text2}</span>
                <span className='text-white mt-4 text-sm font-normal text-gray-400 text-left uppercase'>{e.text3}</span>
                <span className='text-white mt-4 text-sm font-normal text-gray-400 text-left uppercase'>{e.text4}</span>
              </div>
            );
          })}

        </div>
      </div>

    </div>

  );
}

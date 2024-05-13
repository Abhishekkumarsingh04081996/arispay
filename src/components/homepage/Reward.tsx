import Container from "../Container";

const ProductList = [
    {
        aos: 'fade-right',
        title: 'ARIS SILVER',
        image: '/assets/silvercard.svg',
        texts: [
            {
                title: 'Gateway Tier: Ideal for Newcomers and Casual Users',
                text: 'Kickstart your journey into the Aris ecosystem with our Gateway Tier, designed specifically for new and occasional users. This entry-level option provides essential rewards and benefits, making it the perfect starting point for those eager to explore the expansive world of cryptocurrencies. Enjoy special incentives as you engage with diverse crypto projects and begin to unlock the full potential of the Aris platform.'
            },
        ],
    },
    {
        aos: 'fade-right',
        title: 'ARIS GOLD',
        image: '/assets/goldcard.svg',
        texts: [
            {
                title: 'Core Tier: Designed for Regular Users of Aris Pay',
                text: 'Elevate your experience with the Core Tier, tailored for our regular users who frequently interact with the Aris ecosystem. This mid-level tier rewards your consistent engagement with enhanced rewards and exclusive offers. To qualify, users must possess the Aris Debit Card, signifying a committed partnership and deeper integration with the Aris platform. Embrace a richer experience as you deepen your involvement and reap greater benefits.'
            },
        ],
    },
    {
        aos: 'fade-right',
        title: 'ARIS PLATINUM',
        image: '/assets/platinumcard.svg',
        texts: [
            {
                title: 'Elite Tier: The Apex of the Aris Rewards Program',
                text: 'Experience the pinnacle of privilege with our Elite Tier, reserved exclusively for the most dedicated users of Aris Pay. This premier level offers the highest tier of rewards, including unmatched cashback rates and VIP services, available only to holders of the Aris Platinum members. This tier represents the ultimate commitment between you and the Aris ecosystem, providing unparalleled benefits and recognizing your loyalty with the highest caliber of services. Join the Elite to enjoy the full spectrum of what Aris has to offer.'
            },
        ],
    },

];
export default function Rewards() {
    return (
        <div className="pt-36 max-sm:pt-10 bg-black">
            <Container className="min-h-screen flex flex-col items-center bg-black">
                <div className="text-4xl text-center text-white font-normal mb-4 border-b-2 border-blue-500">Our Rewards Program</div>

                <div className="mx-auto flex mt-4 bg-black w-full h-screen border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-lg overflow-hidden flex">
                    {ProductList.map((product) => {
                        return (
                            <ProductCard
                                aos={product.aos}
                                image={product.image}
                                title={product.title}
                                texts={product.texts}
                            ></ProductCard>
                        );
                    })}
                </div>
            </Container>
        </div>

    );
}
interface IProduct {
    aos: string;
    image: string;
    title: string;
    texts: {
        title: string;
        text: string;
    }[];
}
function ProductCard(props: IProduct) {
    return (

        <div className="w-1/3 bg-balck text-white font-normal text-3xl text-center pt-4 border-gray-500 border-l border-r border-opacity-70">
            {props.title}
            <div className='relative bg-black h-screen w-full flex justify-center px'>
                <div className='m-4'>
                    <img
                        src={props.image}
                        height={'100%'}
                        width={'100%'}
                        alt=''
                    />

                    <div>
                        {props.texts.map((e) => {
                            return (
                                <div className='mt-1 flex flex-col'>
                                    <span className='text-[#00F0FF] font-bold text-xl text-left'>{e.title}</span>
                                    <span className='text-white mt-4 text-sm font-normal text-gray-400 text-left'>{e.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}
import Container from '../Container';

const ProductList = [
    {
        aos: 'fade-right',

        image: '/assets/seedlesslogin.svg',
        texts: [
            {
                title: 'Seedless Login',
                text: 'PIN-based entry with the advanced security of biometric verification, ensuring both ease of access and unmatched protection',
            },
        ],
    },
    {

        aos: 'fade-left',
        image: '/assets/multichain.svg',
        texts: [
            {
                title: 'Multi-Chain Support',
                text: 'Supports interactions across various blockchain networks, enabling seamless connectivity between multiple chains'
            },

        ],
    },
    {

        aos: 'fade-right',
        image: '/assets/gateway.svg',
        texts: [
            {
                title: 'Gateway Rate Optimization',
                text: 'By analyzing and comparing exchange rates in real-time, the Aris App maximizes the value of each transaction, providing cost savings and improved financial management'
            },

        ],
    },
    {
        image: '/assets/smartcontract.svg',
        aos: 'fade-left',
        texts: [
            {
                title: 'Smart Contract Insurance',
                text: 'Safeguards against vulnerabilities and losses in blockchain transactions by providing coverage for code errors and execution failures'
            },

        ],
    },
    {
        image: '/assets/realtime.svg',
        aos: 'fade-left',
        texts: [
            {
                title: 'Real-Time Account Alerts',
                text: 'Users are notified instantly via email, SMS, or app alerts for any account activity, including transactions, logins, and security changes. This ensures that users are always informed and their accounts are protected.'
            },

        ],
    },
    {
        image: '/assets/supportbot.svg',
        aos: 'fade-left',
        texts: [
            {
                title: '24/7 Support Bot & Expert Team',
                text: 'Get round-the-clock assistance with our 24/7 bot Aria and expert team to help you solve issues at any time.'
            },

        ],
    },
];

export default function Product() {
    return (
        <div className='relative py-20 bg-black'>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-5 gap-7'>
                    {ProductList.map((product) => {
                        return (
                            <ProductCard
                                aos={product.aos}
                                image={product.image}
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
    texts: {
        title: string;
        text: string;
    }[];
}

function ProductCard(props: IProduct) {
    return (
        <div
            data-aos={props.aos}
            className=''>
            <div className='rounded-3xl bg-black p-5 border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 flex flex-row h-full'>
                <div className='mr-4'>
                    <img
                        src={props.image}
                        height={70}
                        width={70}
                        alt=''
                    />


                    <div>
                        {props.texts.map((e) => {
                            return (
                                <div className='mt-1 flex flex-col'>
                                    <span className='text-[#00F0FF] font-bold text-xl uppercase'>{e.title}</span>
                                    <span className='text-white mt-4 text-sm font-normal text-gray-400'>{e.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";
import Token from "./token";

const Discovers = () => {
    const crousel = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrow: true,
    };

    return (
        <div className="image-carousel">
            <div className="flex">
                <div className="w-full bg-black">
                    <Container>
                        <Slider {...crousel} className="bg-black">
                            <div className="w-1/2 mx-auto bg-black border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl overflow-hidden flex" >
                                <div className="flex">
                                    <div className="w-11/12 pl-4 pt-16" style={{ height: '828px' }}>

                                        <h1 className="font-bold text-left text-primary text-4xl mb-2">Send Digital Assets with Ease</h1>
                                        <p className="text-white font-normal text-2xl text-left">Simplify your financial transactions with ChainsCard's seamless sending feature.</p><br />
                                        <p className="text-white font-normal text-2xl text-left">Whether you need to make payments, send funds to friends or family, or transfer assets between wallets, our intuitive interface ensures a smooth and efficient experience.</p><br />
                                        <p className="text-white font-normal text-2xl text-left">Enjoy the convenience of instant, secure, and hassle-free transactions at your fingertips.</p>

                                    </div>
                                    <div className="w-full flex">
                                        <Token />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto bg-black border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl overflow-hidden flex" >
                                <div className="flex">
                                    <div className="w-11/12 pl-4 pt-16" style={{ height: '828px' }}>
                                        <h1 className="font-bold text-left text-primary text-4xl mb-2">Introducing ARIS Access Cards for Both Physical and Digital Worlds</h1>
                                        <p className="text-white font-normal text-2xl text-left">Experience unparalleled flexibility and convenience with our comprehensive access solutions, tailored to meet the evolving demands of today's dynamic world. Our system offers both digital and physical cards, ensuring seamless transactions and secure access anywhere, anytime. Designed to bridge the gap between modern convenience and traditional security, our solutions are ideal for all your access needs, providing versatility and robust security at every point of interaction.</p>
                                        <p className="text-white font-normal text-2xl text-left">Embrace the ease of managing purchases, accessing secure facilities, or handling services with our user-friendly platform. Whether you are an individual or a business, our access solutions incorporate cutting-edge encryption and authentication technologies, guaranteeing the highest standards of security and peace of mind. Step into a world where flexibility meets security, empowering you to navigate both the physical and digital realms confidently and effortlessly.</p>

                                    </div>
                                    <div className="w-full flex">
                                        <Token />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto bg-black border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl overflow-hidden flex" >
                                <div className="flex">
                                    <div className="w-11/12 pl-4 pt-16" style={{ height: '828px' }}>
                                        <h1 className="font-bold text-left text-primary text-4xl mb-2">Global Accessibility</h1>
                                        <p className="text-white font-normal text-2xl text-left">The Aris Debit Card is specifically designed for global citizens, facilitating effortless worldwide spending and making it an ideal choice for travelers and international users. Whether you're shopping abroad, handling business expenditures, or managing everyday purchases, the Aris Debit Card offers unparalleled convenience and accessibility across the globe. This feature-rich card integrates smoothly into the lives of those who frequently cross borders, providing a seamless financial experience no matter where you find yourself.</p>


                                    </div>
                                    <div className="w-full flex">
                                        <Token />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto bg-black border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl overflow-hidden flex" >
                                <div className="flex">
                                    <div className="w-11/12 pl-4 pt-16" style={{ height: '828px' }}>
                                        <h1 className="font-bold text-left text-primary text-4xl mb-2">Fraud Detection Software</h1>
                                        <p className="text-white font-normal text-2xl text-left">Deploy our advanced fraud detection software, which leverages the power of artificial intelligence and machine learning to meticulously monitor and analyze transactions for any unusual patterns or anomalies that could indicate fraudulent activity. Our system is designed to provide real-time protection, ensuring that your business is safeguarded against potential threats 24/7.</p>
                                        <p className="text-white font-normal text-2xl text-left">By continuously learning from transaction data, our software becomes increasingly effective over time, adapting to new fraudulent tactics and evolving threats. It scrutinizes every transaction, no matter how small, comparing it against known patterns of fraud and flagging any suspicious activity for further review. This proactive approach not only helps in immediate detection but also minimizes the risk of costly chargebacks and reputational damage.</p>
                                    </div>
                                    <div className="w-full flex">
                                        <Token />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Container>
                </div>
            </div>
        </div >
    );
};

export default Discovers;
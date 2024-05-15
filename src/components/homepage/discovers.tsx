
import Container from "../Container";
import Token from "./token";

export default function Discovers() {
    return (
        <>
            <div className="pt-6 max-sm:pt-10 bg-black">
                <Container className="min-h-screen flex flex-col items-center">
                    <div className="text-4xl text-center text-white bg-black mb-16 border-b-2 border-blue-500">Discover the Aris Debit Card</div>
                    <div className="h-screen mx-auto bg-gray border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl overflow-hidden flex">
                        <div className="px-4 pb-4 pt-16 mb-4">
                            <h1 className="font-bold text-left text-primary text-4xl mb-2">Send Digital Assets with Ease</h1>
                            <p className="text-white font-normal text-2xl text-left">Simplify your financial transactions with ChainsCard's seamless sending feature.</p><br />
                            <p className="text-white font-normal text-2xl text-left">Whether you need to make payments, send funds to friends or family, or transfer assets between wallets, our intuitive interface ensures a smooth and efficient experience.</p><br />
                            <p className="text-white font-normal text-2xl text-left">Enjoy the convenience of instant, secure, and hassle-free transactions at your fingertips.</p>
                        </div>
                        <Token />
                    </div>
                </Container>
            </div>
        </>
    );
};




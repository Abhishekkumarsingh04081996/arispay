import Container from '../Container';
import Merchant from './merchant';
import './style.css';

export default function MercentSolution() {
    return (
        <div className="pt-36 max-sm:pt-10 bg-black">
            <Container className="min-h-screen flex flex-col items-center bg-black">
                <div className="text-4xl text-center text-white font-normal mb-4 border-b-2 border-blue-500">Merchant Solutions</div>
                <div className="p-4 mb-4">
                    <p className="text-white font-normal text-xl text-center">Empower your business with Aris Pay Merchant Solutions, designed to simplify and enhance your payment processes. Our platform seamlessly integrates with your existing systems, offering fast, secure, and low-cost transactions that expand your customer reach. Experience the future of business transactions with our advanced digital wallet capabilities, ensuring every payment is a step towards growth</p>
                </div>
                <div className="mx-auto mt-4 bg-black w-full h-screen border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl overflow-hidden flex">
                    <div className="w-full flex">
                        <Merchant />
                    </div>

                </div>
                <p className="absolute bottom-11 left-0 w-full text-white font-normal text-xl text-center">Accept Payments, Send Payouts, and Manage Business Better</p>
            </Container>
        </div>
    );
}

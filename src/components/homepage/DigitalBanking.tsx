
import { SetStateAction, useState } from "react";
import Container from "../Container";
import ArispayCard from "./arispaycard";
import Phone from "./phone";

export default function DigitalBanking() {
    const [email, setEmail] = useState('');

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Submitted email:', email);
    };
    return (
        <div className="pt-36 max-sm:pt-10 bg-black">
            <Container className="min-h-screen flex flex-col items-center">
                {/* border-t border-solid border-opacity-100 border-blue-gray-600 border-l border-r border-opacity-70 */}
                <div className="mx-auto bg-gray border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-lg overflow-hidden flex">
                    <div className="p-4 mb-4">
                        <h1 className="text-white text-center font-bold text-5xl mb-2">New ERA OF<br /> DIGITAL BanKInG</h1>
                        <p className="text-white text-xl text-center">Discover our upcoming suite of solutions, bridging traditional and digital currencies for secure, efficient transactions that empower users and businesses</p>
                        <form onSubmit={handleSubmit} className="space-y-4 mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                                className="border border-gray-500 bg-gray-900 text-white rounded-md p-2"
                            />
                            <button type="submit" className="bg-blue-800 text-white ml-2 px-4 py-2 rounded-md">
                                Get Started
                            </button>
                        </form>
                    </div>
                    <ArispayCard />
                </div>
                <Phone />
            </Container>
        </div>
    );
};




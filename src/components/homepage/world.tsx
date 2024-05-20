
import { SetStateAction, useState } from "react";
import Container from "../Container";

export default function World() {
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
                <div className='text-center mt-20'>
                    <h1 className='text-white text-4xl font-normal'>We Deliver Card To all Countries <br /> Around the world</h1>
                    <h2 className='text-white text-2xl font-normal mb-10 mt-8'>
                        Our Mission Is Global Usability of our cards to  <br />create a new Payment Experiance
                    </h2>
                </div>
                <div className='relative bg-black w-full flex justify-center items-center' style={{ height: '1000px' }}>
                    <div className=''>
                        <img
                            data-aos='fade-left'
                            className='absolute bottom-0 left-20 top-0'
                            src='/Earth.png'
                            alt=''
                        />
                        <Container>
                            <div className="mx-auto h-96 bg-opacity-50 bg-gray-800 border-t mt-96 border-opacity-70 border-gray-500 border-l border-r border-opacity-70 shadow-md rounded-3xl" style={{ width: '765px' }}>
                                <div className='text-center mt-4'>
                                    <p className='text-white text-2xl font-normal mb-10'>
                                        What are you waiting for?
                                    </p>
                                    <p className='text-white text-4xl font-normal'>Get the Only Financial <br /> Super APP</p>
                                </div>
                                <form onSubmit={handleSubmit} className="flex space-y-4 mx-auto justify-center">
                                    <div className="relative flex mt-8 h-10 w-full min-w-[200px] max-w-[24rem]">
                                        <button
                                            className="!absolute right-1 top-1 z-10 select-none rounded-full bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            Get Start
                                        </button>
                                        <input
                                            type="email"
                                            placeholder="Enter your E-mail"
                                            value={email}
                                            onChange={handleChange}
                                            className="peer h-full w-full rounded-full bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border focus:outline-0"
                                        />
                                    </div>
                                </form>
                            </div>
                        </Container>
                    </div>
                </div>
            </Container >
        </div >
    );
};




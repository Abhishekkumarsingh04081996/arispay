import './style.css';

export default function Phone() {
    return (
        <>
            <div className="text-4xl text-white mb-4 border-b-2 border-blue-500">Introducing the Aris App</div>
            <div className='relative bg-black h-screen w-1/2 flex justify-center items-center'>
                <div className=''>
                    <img
                        data-aos='fade-left'
                        className='absolute top-24 left-0 h-96'
                        src='/phone1.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute top-4 right-0 left-56 h-96'
                        src='/phone2.png'
                        alt=''
                    />

                </div>
            </div>
        </>
    );
}

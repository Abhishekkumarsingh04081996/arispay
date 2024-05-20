import './style.css';

export default function Token() {
    return (
        <>
            <div className='relative bg-black w-full flex justify-center items-center mb-24'>
                <div className=''>
                    <img
                        data-aos='fade-left'
                        className='absolute top-8 right-0 left-64 h-60 w-2/3'
                        src='/token.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute top-16 left-16 w-2/3'
                        style={{ height: "555px" }}
                        src='/mobiles.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute right-52 pt-32'
                        style={{ top: "72px" }}
                        src='/visa.png'
                        alt=''
                    />
                </div>
            </div>

        </>
    );
}

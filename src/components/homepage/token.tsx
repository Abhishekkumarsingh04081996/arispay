import './style.css';

export default function Token() {
    return (
        <>
            <div className='relative bg-black w-full flex justify-center items-center right-8 mb-24'>
                <div className=''>
                    <img
                        data-aos='fade-left'
                        className='absolute top-4 left-56 right-0 h-60 w-2/3'
                        src='/token.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute top-10 left-16 h-555 w-2/3'
                        src='/mobiles.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute bottom-28 left-0'

                        src='/visa.png'
                        alt=''
                    />
                </div>
            </div>
        </>
    );
}

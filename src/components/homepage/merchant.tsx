import './style.css';

export default function Merchant() {
    return (
        <>
            <div className='relative bg-black w-full flex justify-center items-center mb-24'>
                <div className=''>

                    <img
                        data-aos='fade-left '
                        className='absolute right-60 top-8'
                        src='/Tab.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute pl-72'
                        src='/Group1.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-right'
                        className='absolute top-20'
                        style={{ paddingLeft: '312px' }}
                        src='/Group2.png'
                        alt=''
                    />
                    <img
                        data-aos='fade-left'
                        className='absolute left-24 bottom-32 top-44'
                        src='/Maskgroup1.png'
                        alt=''
                    />
                </div>
            </div>
        </>
    );
}

import './style.css';

export default function ArispayCard() {
    return (
        <div className='relative bg-black w-full flex justify-center items-center'>
            <div className=''>
                <img
                    className='absolute bottom-4 left-16 h-64'
                    src='/arispaycard.png'
                    alt=''
                />
            </div>
        </div>
    );
}

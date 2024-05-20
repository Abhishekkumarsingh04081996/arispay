const FooterImage = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <img
                src="/ARispay.png"
                alt=""
                className="mb-4"
            />
            <div className="flex justify-end w-full space-x-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="text-blue-700 hover:text-blue-900"
                        src='/twitter.png'
                        alt=''
                    />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="text-blue-700 hover:text-blue-900"
                        src='/linkedIn.png'
                        alt=''
                    />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="text-blue-700 hover:text-blue-900"
                        src='/discord.png'
                        alt=''
                    />
                </a>
                <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="text-blue-700 hover:text-blue-900"
                        src='/telegram.png'
                        alt=''
                    />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="text-blue-700 hover:text-blue-900"
                        src='/instagram.png'
                        alt=''
                    />
                </a>
            </div>
        </div>
    );
};

export default FooterImage;

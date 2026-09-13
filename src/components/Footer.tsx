import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className='pt-10 md:pt-20 px-6 md:px-30 font-jakarta border-gray-100 border-2'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 pb-8 md:pb-15">
                    <div className="grid-cols-1 md:col-span-2 flex flex-col items-center md:items-start justify-center space-y-4">
                    <img src={logo} alt="Logo" />
                    <p className='text-[#64748B] text-xs font-normal text-center w-full md:w-4/5 md:text-left'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul className="flex flex-row text-[#4B5563] md:text-[#475569] font-semibold text-xs gap-4">
                        <li><a href="#">Github</a></li>
                        <li className='list-disc ml-2 md:list-none'><a href="#">Twitter</a></li>
                        <li className='list-disc ml-2 md:list-none'><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="col-span-1 space-y-3 hidden md:block">
                    <h5 className='uppercase text-[#0F172A] text-xs font-bold'>Product</h5>
                    <ul className='text-[#64748B] text-xs font-normal space-y-2.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
                <div className="col-span-1 space-y-3 hidden md:block">
                    <h5 className='uppercase text-[#0F172A] text-xs font-bold'>Company</h5>
                    <ul className='text-[#64748B] text-xs font-normal space-y-2.5'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="col-span-1 space-y-3 hidden md:block">
                    <h5 className='uppercase text-[#0F172A] text-xs font-bold'>Legal</h5>
                    <ul className='text-[#64748B] text-xs font-normal space-y-2.5'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                </div>
                <div className="flex flex-row justify-between items-center py-8 border-t-2 border-gray-100">
                    <p className='text-[#94A3B8] text-xs font-normal'>© 2026 Dev Stack. All rights reserved.</p>
                    <ul className='flex flex-row gap-4 text-xs text-[#94A3B8]'>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
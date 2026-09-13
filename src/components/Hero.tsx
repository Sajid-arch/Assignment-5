import heroImg from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <section className="pt-30 pb-15 px-6 md:px-15 lg:px-30 font-inter">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className='flex flex-col justify-center items-start space-y-8'>
                    <h2 className='text-3xl font-bold text-center md:text-left md:text-4xl lg:text-6xl text-[#0F172A] md:font-extrabold'>Build Your Ideal <span className='bg-clip-text text-transparent bg-linear-to-r from-[#FF5722] from-0% via-[#D81B7E] via-50% to-[#7C3AED] to-100%'>Development Stack</span></h2>
                    <p className='font-normal font-jakarta text-[#475569] text-sm text-center lg:text-lg md:text-left md:w-9/10'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className='flex flex-row items-center justify-center flew-row gap-2 md:gap-4'>
                        <button className='min-w-40 h-10 font-semibold text-xs lg:text-sm text-white px-4 pt-2 pb-3 rounded-lg bg-linear-to-r from-[#F97316] from-0% to-[#EC4899] to-100%'>Explore Technologies</button>
                        <button className='border-2 min-w-40 h-10 px-4 pt-2 pb-3 rounded-lg font-normal text-[#374151] text-xs lg:text-sm border-[#E5E7EB]'>Learn More</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={heroImg} alt="Banner" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
import React from 'react';

const Footer = () => {
    return (
        <footer className='px-4 lg:px-10 bg-[#1A1919] pt-[90px] divide-y divide-slate-700 container mx-auto '>
            <section className='pb-10 grid grid-cols-1 md:grid-cols-5 gap-12'>
                <div>
                    <h3 className='font-extrabold text-3xl text-white mb-2'>Kormo</h3>
                    <p className='text-[#FFFFFFB2] text-sm mb-2'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="/src/images/icons/media-icons.png" className='md:w-6/12' alt="" />
                </div>
                <div>
                    <h3 className='font-semibold text-[20px] text-white mb-2'>Company</h3>
                    <ul className='flex flex-col justify-start gap-2 text-[#FFFFFFB2]'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Careers</li>
                        <li>Latest News</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-[20px] text-white mb-2'>Product</h3>
                    <ul className='flex flex-col justify-start gap-2 text-[#FFFFFFB2]'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-[20px] text-white mb-2'>Support</h3>
                    <ul className='flex flex-col justify-start gap-2 text-[#FFFFFFB2]'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-[20px] text-white mb-2'>Contact</h3>
                    <ul className='flex flex-col justify-start gap-2 text-[#FFFFFFB2]'>
                        <li>524 Broadway, NYC</li>
                        <li>+1777-987-5570</li>
                    </ul>
                </div>
            </section>
            <section className='py-5 flex justify-between items-center'>
                    <p className='text-[#FFFFFF66] text-[13px]'>@2023 Kormo. All Rights Reserved</p>
                    <p className='text-[#FFFFFF66] text-[13px]'>Powered by <b>Kormo</b></p>
            </section>
        </footer>
    );
};

export default Footer;
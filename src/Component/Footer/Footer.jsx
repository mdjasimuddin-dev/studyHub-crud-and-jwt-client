import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>

            <footer className="footer footer-center p-10 bg-[#0c1944] text-white">
                <aside>
                    <img className='h-24 w-24' src="https://i.postimg.cc/J44zYSqz/logo.png" alt="" />
                    <p className="font-bold text-4xl">StudyHub.com </p>
                </aside>
                <nav>
                    <h1>Connec with us</h1>
                    <div className="grid grid-flow-col gap-x-4">
                        <a><FaGithub className='text-2xl' /></a>
                        <a><FaFacebook className='text-2xl' /></a>
                        <a><FaLinkedin className="text-2xl" /></a>
                        <a><FaTwitter className="text-2xl" /></a>
                    </div>
                </nav>

                <div>
                    <p>Copyright © 2024 - All right reserved by StudyHub</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-8 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <span className="text-lg font-semibold">Connect with me:</span>
                </div>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Caleb-ne1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors duration-300"
                    >
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub"
                            className="h-8 w-8"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/caleb-kibet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors duration-300"
                    >
                    <FaLinkedin className="h-8 w-8"/>
                    </a>
                    <a
                        href="kemboicaleb19.com"
                        className="hover:text-gray-300 transition-colors duration-300"
                    >
                    <MdEmail className="h-8 w-8"/>
                    </a>
                    <a
                        href="https://wa.me/+254775914763"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors duration-300"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp"
                            className="h-8 w-8"
                        />
                    </a>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} Caleb Kibet. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

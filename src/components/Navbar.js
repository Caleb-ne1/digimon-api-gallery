import React from 'react'
import {Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar bg-gray-800 text-white p-4 flex justify-between items-center shadow-md'>
            <Link to="/">
                <h1 className='font-mono text-xl font-bold'>Digimon</h1>
            </Link>
            <a
                href="https://github.com/Caleb-ne1"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center hover:text-gray-400 transition-colors duration-300'
            >
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className='h-8 w-8 rounded-full border border-gray-300 shadow-sm transition-transform duration-300 transform hover:scale-105'
                />
                <span className='ml-2 text-sm font-medium'>Caleb Kibet</span>

            </a>
        </div>

    )
}

export default Navbar

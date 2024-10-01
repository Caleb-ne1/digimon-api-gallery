import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader  from './Loader'
const Digimons = () => {
    const [digimons, setDigimons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async (page) => {
        try {{/* Pagination controls */}
            const response = await axios.get(`https://digi-api.com/api/v1/digimon?page=${page}`);
            setDigimons(response.data.content);
            setTotalPages(response.data.pageable.totalPages);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen p-6 flex flex-col justify-between'>
            <div>
                <h1 className='text-3xl font-bold text-center mb-6'>Digimon Collection</h1>
                <div className='flex flex-wrap gap-6 justify-center mb-20'>
                    {digimons.length > 0 ? (
                        digimons.map((digimon) => (
                            <div
                                key={digimon.id}
                                className='flex flex-col bg-white p-6 rounded-lg shadow-lg h-80 w-72 transition-transform duration-300 transform hover:scale-105'
                            >
                                <h2 className='text-xl text-red-500 font-semibold my-2'>#{digimon.id}</h2>
                                <img
                                    src={digimon.image}
                                    alt={digimon.name}
                                    className='h-32 w-32 mx-auto mb-4 object-cover rounded-full shadow-md'
                                />
                                <p className='text-center text-lg text-gray-800 font-medium mb-4'>{digimon.name}</p>
                                <Link
                                    to={`/digimon-details/${digimon.id}`}
                                    className='mt-auto text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-200 text-center'
                                >
                                    Learn more
                                </Link>
                            </div>
                        ))
                    ) : (
                        <>
                            <Loader />
                        </>
                    )}
                </div>
            </div>

            <div className='fixed bottom-0 left-0 right-0 bg-cyan-200 rounded-t-lg p-4 shadow-lg flex justify-between items-center'>
                <button
                    className='flex items-center justify-center bg-blue-500 rounded-full shadow-md p-4 hover:bg-blue-600 transition duration-200 text-white'
                    onClick={handlePrevious}
                >
                    <IoIosArrowBack className='text-2xl' />
                </button>
                <p className='mx-4 text-xl font-semibold text-gray-800'>
                    Page <span className='text-blue-600'>{currentPage + 1}</span> of {totalPages}
                </p>
                <button
                    className='flex items-center justify-center bg-blue-500 rounded-full shadow-md p-4 hover:bg-blue-600 transition duration-200 text-white'
                    onClick={handleNext}
                >
                    <MdArrowForwardIos className='text-2xl' />
                </button>
            </div>
        </div>
    );
}

export default Digimons;

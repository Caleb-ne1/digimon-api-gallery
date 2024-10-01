import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import axios from 'axios';
import { IoArrowBackOutline } from "react-icons/io5";

const DigimonDetail = () => {
    const { id } = useParams();
    const [digimon, setDigimon] = useState();

    useEffect(() => {
        const fetchDigimon = async () => {
            try {
                const response = await axios.get(`https://digi-api.com/api/v1/digimon/${id}`);
                setDigimon(response.data);
            } catch (error) {
                alert('Error fetching Digimon details');
            }
        };

        fetchDigimon();
    }, [id]);

    if (!digimon) {
        return <Loader />
    }

    return (
        <div className='p-10 bg-gray-100 min-h-screen'>
            <div className='flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 w-full max-w-screen-lg mx-auto my-4 transition-transform duration-300 hover:scale-105'>
                <div className='flex-1'>
                    {digimon.images?.[0]?.href && (
                        <img
                            src={digimon.images[0].href}
                            alt={digimon.name}
                            className="rounded-lg w-full h-auto max-w-sm mx-auto "
                        />
                    )}
                </div>

                <div className='flex-1 p-6 flex flex-col'>
                    <h2 className="text-4xl font-bold text-red-500 mb-3 text-center md:text-left">{digimon.name}</h2>
                    <div className='flex-grow'>
                        {digimon.levels?.length > 0 ? (
                            <>
                                <p className="text-lg font-semibold mb-2 border-b-2 border-red-400 pb-2">Levels:</p>
                                {digimon.levels.map((level, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className="text-lg">{level.level}</span>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p className="text-lg text-gray-500">No levels available.</p>
                        )}

                        {digimon.types?.length > 0 ? (
                            <>
                                <p className="text-lg font-semibold mb-2 border-b-2 border-red-400 pb-2">Types:</p>
                                <ul className="list-disc pl-5 mb-3">
                                    {digimon.types.map((type, index) => (
                                        <li key={index} className="text-lg flex items-center">
                                            <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                            {type.type}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-lg text-gray-500">No types available.</p>
                        )}

                        {digimon.attributes?.length > 0 ? (
                            <>
                                <p className="text-lg font-semibold mb-2 border-b-2 border-red-400 pb-2">Attributes:</p>
                                <ul className="list-disc pl-5">
                                    {digimon.attributes.map((attribute, index) => (
                                        <li key={index} className="text-lg flex items-center">
                                            <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                                            {attribute.attribute}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-lg text-gray-500">No attributes available.</p>
                        )}
                    </div>
                </div>
            </div>


            <div className="mt-8 flex flex-col">
                <h3 className="text-2xl font-bold mb-4">Descriptions</h3>
                {digimon.descriptions?.length > 0 ? (
                    <div className="flex flex-col space-y-4">
                        {digimon.descriptions
                            .filter(description => description.language === 'en_us')
                            .map((description, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full">
                                    <p className="text-gray-800 text-lg">{description.description}</p>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p className="text-gray-600">No descriptions available.</p>
                )}
            </div>

            <div className="mt-8">
                <h1 className='bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 mb-5'>Skills</h1>
                {digimon.skills?.length > 0 ? (
                    <div className='flex flex-row flex-wrap gap-10'>
                        {digimon.skills.map((skill, index) => (
                            <div
                                key={index}
                                className='bg-gradient-to-r from-gray-800 to-gray-600 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105'
                            >
                                <h2 className="font-bold text-white text-lg mb-2">{skill.skill}</h2>
                                <p className="text-white text-sm">{skill.description || 'No description'}</p>

                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-white">No skills available.</p>
                )}
            </div>

            <div className="mt-8">
                <h1 className='bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 mb-5'>Prior Evolutions</h1>
                {digimon.priorEvolutions?.length > 0 ? (
                    <div className='flex flex-row flex-wrap gap-10'>
                        {digimon.priorEvolutions.map((evolution, index) => (
                            <div key={index} className='bg-slate-50 p-5 shadow-xl rounded-lg'>
                                <img src={evolution.image} alt={evolution.digimon} className="rounded-md w-full max-w-xs" />
                                <p>Digimon: {evolution.digimon}</p>
                                <p>Condition: {evolution.condition || 'None'}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No prior evolutions available.</p>
                )}
            </div>

            <>
                <Footer />
            </>
        </div>
    );
};

export default DigimonDetail;

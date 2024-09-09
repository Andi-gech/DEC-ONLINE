import React from 'react';
import heroImage from '../assets/imagess.jpeg';
import logo from '../assets/Untitled.png';
import { IoIosRocket } from 'react-icons/io';
import { FaGraduationCap, FaUsers, FaLaptopCode, FaBrain, FaChartBar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();
    
    return (
        <div className="w-full h-full bg-gray-100">
            <header className="w-full h-[70px] bg-zinc-900 shadow-md flex justify-between items-center px-6">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-[50px] h-[50px] rounded-full" />
                    <h1 className="ml-3 text-xl font-bold text-gray-200">DecOnline</h1>
                </div>
                <Link to={'/signup'} className="space-x-4">
                    <button className="px-4 py-2 bg-yellow-500 rounded-md">Sign Up</button>
                </Link>
            </header>

            <section className="w-full h-[500px] bg-cover bg-black bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl text-white font-bold">Master New Skills Online</h2>
                    <p className="text-lg text-gray-200 mt-3">Thousands of courses at your fingertips.</p>
                    <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md">Get Started Now</button>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center flex-col">
                            <IoIosRocket size={60} className='text-blue-500 mb-4' />
                            <h4 className="text-xl font-bold mb-2">Expert Instructors</h4>
                            <p className="text-gray-600">Learn from industry experts who are passionate about teaching.</p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center flex-col">
                            <FaGraduationCap size={60} className='text-green-500 mb-4' />
                            <h4 className="text-xl font-bold mb-2">Flexible Learning</h4>
                            <p className="text-gray-600">Learn at your own pace with flexible course options.</p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center flex-col">
                            <FaUsers size={60} className='text-red-500 mb-4' />
                            <h4 className="text-xl font-bold mb-2">Certification</h4>
                            <p className="text-gray-600">Earn certificates to showcase your new skills and knowledge.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Courses Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center flex-col">
                            <FaLaptopCode size={60} className='text-blue-600 mb-4' />
                            <h4 className="text-xl font-bold mb-2">Programming</h4>
                            <p className="text-gray-600">Master front-end and back-end technologies to build full-stack applications.</p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center flex-col">
                            <FaBrain size={60} className='text-green-600 mb-4' />
                            <h4 className="text-xl font-bold mb-2">Personal Development</h4>
                            <p className="text-gray-600">Enhance your personal skills and grow both personally and professionally.</p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center flex-col">
                            <FaChartBar size={60} className='text-red-600 mb-4' />
                            <h4 className="text-xl font-bold mb-2">Business Management</h4>
                            <p className="text-gray-600">Develop essential skills to run a successful business or startup.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">What Our Students Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="italic text-gray-600">"The courses on DecOnline helped me land my dream job in tech!"</p>
                            <h4 className="mt-4 font-bold">- Jane Doe</h4>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="italic text-gray-600">"I love the flexibility and the expert instructors. Highly recommend!"</p>
                            <h4 className="mt-4 font-bold">- John Smith</h4>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="italic text-gray-600">"DecOnline’s courses gave me the skills I needed to start my own business."</p>
                            <h4 className="mt-4 font-bold">- Mary Johnson</h4>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="py-16 bg-white">
                <div className=" flex items-center justify-center flex-col mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">What Inspired Us</h3>
                        <div className="bg-gray-100 p-6 rounded-md shadow-md">
                            <p className="italic text-gray-600">"As university students in sub-Saharan Africa, we are acutely aware of the barriers to quality education. Our diverse backgrounds reveal a landscape where access to learning resources is often limited by geography, financial constraints, and inadequate infrastructure. Inspired by our shared experiences, we envisioned an online platform that democratizes education, making it accessible to all, regardless of location or socioeconomic status.

The digital revolution offers unprecedented opportunities for learning, and we sought to harness this potential. Our platform aims to bridge the educational divide, providing interactive resources, peer support, and expert guidance. We believe in the power of collaboration and knowledge sharing, which can uplift entire communities. By creating this app, we aim to empower learners, foster innovation, and inspire a new generation of thinkers and leaders, transforming challenges into opportunities for growth in our vibrant region."</p>
                            <button onClick={() => navigate('/teams')} className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md">Meet the Team`</button>
                    </div>
                
                </div>
            </section>                
            <section className="bg-blue-500 py-16 text-center text-white">
                <h4 className="text-3xl font-bold mb-4">Start Learning Today</h4>
                <p className="text-lg mb-6">Join thousands of learners around the globe.</p>
                <button onClick={() => navigate("/courses")} className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md">Browse Courses</button>
            </section>

            <footer className="bg-zinc-900 text-white py-6 text-center">
                <p>&copy; 2024 DecOnline. All Rights Reserved.</p>
                <div className="mt-4">
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
                </div>
            </footer>
        </div>
    );
}

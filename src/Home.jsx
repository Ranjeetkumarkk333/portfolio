import React from 'react'
import Header from './Header';

function Home() {


  return (
      <div className="h-screen">
    <div className="flex justify-end sm:hidden">
    <svg width="375" height="50" viewBox="0 0 375 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="375" height="50" fill="white"/>
    <path d="M327 20H357" stroke="#21243D" stroke-width="1.6"/>
    <path d="M327 29H357" stroke="#21243D" stroke-width="1.6"/>
    <path d="M327 38H357" stroke="#21243D" stroke-width="1.6"/>
    </svg>
</div>
<div >
    <Header/>
</div>
<div className="sm:px-36">
<div class="sm:flex flex-row-reverse sm:mt-6 px-5">
    <div className="h-40 w-40 mx-auto shrink-0">
        <img className="w-full h-full rounded-full object-cover" src="https://media.discordapp.net/attachments/934108686589259867/938079106338271262/IMG-20220201-WA0002.jpg"/>
    </div>
    <div>
        <h1 className="text-3xl sm:text-left font-bold text-center mt-4">Hi, I am John,
            Creative Technologist
        </h1>
        <p className="text-center mt-5 sm:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
           duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <div className="flex justify-center sm:justify-start mt-7">
        <a className="p-2 bg-red-500 rounded-sm hover:bg-red-700" href="https://codeyogi.io/">Download Resume</a>
    </div>
    </div>
</div>
</div>
</div>
  )
}

export default Home;

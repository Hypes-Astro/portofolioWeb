'use client'
import FotoImage1 from '@/public/images/Bengkod.png'
import FotoImage2 from '@/public/images/Alkahfi.png'
import FotoImage3 from '@/public/images/Kerjain.png'
import FotoImage4 from '@/public/images/KabarinApp.png'
import FotoImage5 from '@/public/images/perpusAPI.png'
import FotoImage6 from '@/public/images/portoin.png'

import { Icon } from '@iconify/react';

import Image from 'next/image'
import FeaturesBlocks from './features-blocks'
import Experience from './experience'
export default function Features() {
  
  
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 hover:bg-slate-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About me</h1>
            <p className="text-xl text-gray-600">
              I am a Computer Science student passionate about implementing cutting-edge technologies, particularly in web development using ReactJS. I excel in tools like Vite for bundling, Next.js for server-rendered applications, and Laravel Blade for dynamic HTML views. Proficient in TypeScript, JavaScript, PHP, and SQL, my skills span both front-end and back-end development. My commitment to staying current ensures effective contributions to diverse software projects.
            </p>
            <span className=" mt-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              📌 Semarang, Indonesia
            </span>
          </div>

          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 hover:bg-slate-200 transform -translate-y-1/2"></div>


          <Experience/>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 hover:bg-slate-200 transform -translate-y-1/2"></div>

          <FeaturesBlocks/>

          {/* Section content */}
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 hover:bg-slate-200 transform -translate-y-1/2"></div>
          <div className="mt-10 ">
            
            {/* Content */}
            <div className=" md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-up">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Projects</h3>
              </div>

              {/* konten */}
              <section className='gap-3 grid grid-cols-1  md:grid-cols-3 p-5 shadow-xl rounded-lg h-full'>
                
                {/* 1 */}
                <div className="box1"  >
                  <div className="collapse bg-base-200">
                    <input type="checkbox" id="toggleCollapse1" className="peer" />
                    <label
                      htmlFor="toggleCollapse1"
                      className="collapse-title bg-gray-200  hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content"
                    >
                      
                      <h1 className='font-semibold mb-5 text-lg '>LMS Bengkel Koding</h1>
                      <Image src={FotoImage1} alt=""  />
                    </label>
                    <div className="collapse-content flex flex-col gap-3 bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Front End</p>
                      <p>Education platform has reached over 200 students at UDINUS.</p>
                      <div className="tech flex gap-3 mt-2 flex-wrap">
                        <div className="badge p-3 badge-ghost text-white">Laravel</div>
                        <div className="badge badge-error text-white p-3">Blade</div>
                        <div className="badge badge-primary text-white p-3">Tailwind</div>
                        <div className="badge badge-warning p-3">Javascript</div>
                        <div className="badge badge-success text-white p-3">Mysql</div>
                      </div>
                      <div className="linkTo w-full flex  items-center gap-3 ">
                        <a href="https://github.com/bengkelkoding/bengkod-web-laravel9" className="w-full bg-from-blue-500 rounded-full outline p-2 text-center mt-2 hover:btn-ghost " target='_blank'>More Info!</a>
                        <a href="https://bengkelkoding.dinus.ac.id/"
                           className="w-1/4 items-center justify-center flex bg-from-blue-500 rounded-full  p-2 text-center mt-2 hover:btn-ghost " target='_blank'>
                          <Icon icon="ph:share" className='w-1/2 h-6' />
                        </a>
                      </div>
 
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="box2">
                    <div className="collapse bg-base-200">
                    <input type="checkbox" id="toggleCollapse2" className="peer" />
                    <label
                      htmlFor="toggleCollapse2"
                      className="collapse-title bg-gray-200 hover:bg-slate-200 text-primary-content  peer-checked:bg-slate-200  peer-checked:text-secondary-content"
                    >
                      
                      <h1 className='font-semibold mb-5 text-lg'>Alkahfi Muslim Center</h1>
                      <Image src={FotoImage2} alt=""  />
                    </label>
                    <div className="collapse-content flex flex-col gap-3 bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Full Developer</p>
                      <p>Implementing APIs for Prayer Schedule, Hadith, and Short Prayers at the Muslim Center Al Kahfi </p>
                      <div className="tech flex gap-3 mt-2 flex-wrap">
                        <div className="badge p-3 badge-ghost text-white">React JS</div>
                        <div className="badge badge-error text-white p-3">API</div>
                        <div className="badge badge-primary text-white p-3">Tailwind</div>
                        <div className="badge badge-warning p-3">Javascript</div>
                      </div>
                      <div className="linkTo w-full flex  items-center gap-3 ">
                        <a href="https://github.com/Hypes-Astro/Alkahfi-web-platform" className="w-full bg-from-blue-500 rounded-full outline p-2 text-center mt-2 hover:btn-ghost " target='_blank'>More Info!</a>
                        <a href="https://alkahfimuslimcenter.vercel.app/"
                           className="w-1/4 items-center justify-center flex bg-from-blue-500 rounded-full  p-2 text-center mt-2 hover:btn-ghost " target='_blank'>
                          <Icon icon="ph:share" className='w-1/2 h-6' />
                        </a>
                      </div>                      
                    </div>
                  </div>  
                </div>

                {/* 3 */}
                <div className="box3">
                  <div className="collapse bg-base-200">
                    <input type="checkbox" id="toggleCollapse3" className="peer" />
                    <label
                      htmlFor="toggleCollapse3"
                      className="collapse-title bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content"
                    >
                      
                      <h1 className='font-semibold mb-5 text-lg'>kerjain ToDo</h1>
                      <Image src={FotoImage3} alt=""  />
                    </label>
                    <div className="collapse-content flex flex-col gap-3 bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Full Developer</p>
                      <p>Working on a React JS CRUD project to manage activities with state</p>
                      <div className="tech flex gap-3 mt-2 flex-wrap">
                        <div className="badge p-3 badge-ghost text-white">React</div>
                        <div className="badge badge-primary text-white p-3">Tailwind</div>
                        <div className="badge badge-warning p-3">Javascript</div>
                      </div>
                      <div className="linkTo w-full flex  items-center gap-3 ">
                        <a href="https://github.com/Hypes-Astro/Kerja.in" className="w-full bg-from-blue-500 rounded-full outline p-2 text-center mt-2 hover:btn-ghost " target='_blank'>More Info!</a>
                        <a href="https://kerjain.vercel.app/"
                           className="w-1/4 items-center justify-center flex bg-from-blue-500 rounded-full  p-2 text-center mt-2 hover:btn-ghost " target='_blank'>
                          <Icon icon="ph:share" className='w-1/2 h-6' />
                        </a>
                      </div>  
                    </div>
                  </div>  
                </div>

                {/* 4 */}
                <div className="box4">
                  <div className="collapse bg-base-200">
                    <input type="checkbox" id="toggleCollapse4" className="peer" />
                    <label
                      htmlFor="toggleCollapse4"
                      className="collapse-title bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200  peer-checked:text-secondary-content"
                    >
                      
                      <h1 className='font-semibold mb-5 text-lg'>Kabarin: News App</h1>
                      <Image src={FotoImage4} alt=""  />
                    </label>
                    <div className="collapse-content flex flex-col gap-3 bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Full Developer</p>
                      <p>This project will likely enhance the user experience by integrating real-time news updates</p>
                      <div className="tech flex gap-3 mt-2 flex-wrap">
                        <div className="badge p-3 badge-ghost text-white">Jetpack Compose</div>
                        <div className="badge badge-primary text-white p-3">Kotlin</div>
                        <div className="badge badge-warning p-3">API</div>
                      </div>
                      <a href="https://github.com/Hypes-Astro/Kabarin-JuaraAndroid" className="bg-from-blue-500 rounded-full outline p-2 text-center mt-2 hover:btn-ghost " target='_blank'>More Info!</a>
                    </div>
                  </div>  
                </div>

                {/* 5 */}
                <div className="box5">
                  <div className="collapse bg-base-200">
                    <input type="checkbox" id="toggleCollapse5" className="peer" />
                    <label
                      htmlFor="toggleCollapse5"
                      className="collapse-title bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content"
                    >
                      
                      <h1 className='font-semibold mb-5 text-lg'>API Perpusatakaan</h1>
                      <div className="flex items-center w-full">
                        <Image src={FotoImage5} alt="" className='w-ob ' />
                      </div>
                    </label>
                      <div className="collapse-content flex flex-col gap-3 bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                        <p className='font-semibold'>Role : Full Developer</p>
                        <p>Make API environment for CRUD </p>
                        <div className="tech flex gap-3 mt-2 flex-wrap">
                          <div className="badge p-3 badge-ghost text-white">Node JS</div>
                          <div className="badge badge-error text-white p-3">API</div>
                          <div className="badge badge-warning p-3">Javascript</div>
                        </div>
                        <a href="https://github.com/Hypes-Astro/perpusApi" className="bg-from-blue-500 rounded-full outline p-2 text-center mt-2 hover:btn-ghost " target='_blank'>More Info!</a>
                    </div>
                  </div>  
                </div>

                {/* 6 */}
                <div className="box6">
                  <div className="collapse bg-base-200">
                    <input type="checkbox" id="toggleCollapse6" className="peer" />
                    <label
                      htmlFor="toggleCollapse6"
                      className="collapse-title bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content"
                    >
                      
                      <h1 className='font-semibold mb-5 text-lg'>Portoin  alifanwarpage.vercel.app</h1>
                      <div className="flex items-center w-full">
                        <Image src={FotoImage6} alt="" className='w-ob ' />
                      </div>
                    </label>
                      <div className="collapse-content flex flex-col gap-3 bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                        <p className='font-semibold'>Role : Full Developer</p>
                        <p>Make a simple portofolio page with framework NextJs</p>
                        <div className="tech flex gap-3 mt-2 flex-wrap">
                          <div className="badge p-3 badge-ghost text-white">Next JS</div>
                          <div className="badge badge-primary text-white p-3">React</div>
                          <div className="badge badge-error text-white p-3">Typescript</div>
                          <div className="badge badge-warning p-3">Tailwind css</div>
                        </div>
                        <a href="https://github.com/Hypes-Astro/portofolioWeb" className="bg-from-blue-500 rounded-full outline p-2 text-center mt-2 hover:btn-ghost " target='_blank'>More Info!</a>
                    </div>
                  </div>  
                </div>
              </section>
              
             </div>

          </div>

        </div>
      </div>
    </section>
  )
}
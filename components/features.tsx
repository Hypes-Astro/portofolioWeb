'use client'
import FotoImage1 from '@/public/images/Bengkod.png'
import FotoImage2 from '@/public/images/Alkahfi.png'
import FotoImage3 from '@/public/images/Kerjain.png'
import FotoImage4 from '@/public/images/KabarinApp.png'

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
                    <div className="collapse-content bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Front End</p>
                      <p>Education platform has reached over 200 students at UDINUS.</p>
                      <div className="tech flex gap-3 mt-2">
                        <div className="badge badge-ghost text-white">Laravel</div>
                        <div className="badge badge-error text-white ">Blade</div>
                        <div className="badge badge-primary text-white">Tailwind</div>
                        <div className="badge badge-warning">Javascript</div>
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
                      
                      <h1 className='font-semibold mb-5 text-lg'>Muslim Center</h1>
                      <Image src={FotoImage2} alt=""  />
                    </label>
                    <div className="collapse-content bg-gray-200 hover:bg-slate-200 text-primary-content  peer-checked:bg-slate-200  peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Full Developer</p>
                      <p>Implementing APIs for Prayer Schedule, Hadith, and Short Prayers at the Muslim Center Al Kahfi </p>
                      <div className="tech flex gap-3 mt-2">
                        <div className="badge badge-ghost text-white">React JS</div>
                        <div className="badge badge-error text-white ">API</div>
                        <div className="badge badge-primary text-white">Tailwind</div>
                        <div className="badge badge-warning">Javascript</div>
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
                    <div className="collapse-content bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200  peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Full Developer</p>
                      <p>Working on a React JS CRUD project to manage activities with state</p>
                      <div className="tech flex gap-3 mt-2">
                        <div className="badge badge-ghost text-white">React</div>
                        <div className="badge badge-primary text-white">Tailwind</div>
                        <div className="badge badge-warning">Javascript</div>
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
                    <div className="collapse-content bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p className='font-semibold'>Role : Full Developer</p>
                      <p>This project will likely enhance the user experience by integrating real-time news updates</p>
                      <div className="tech flex gap-3 mt-2">
                        <div className="badge badge-ghost text-white">Jetpack Compose</div>
                        <div className="badge badge-primary text-white">Kotlin</div>
                        <div className="badge badge-warning">API</div>
                      </div>
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
                      
                      <h1 className='font-semibold mb-5 text-lg'>Muslim Center</h1>
                      <Image src={FotoImage2} alt=""  />
                    </label>
                    <div className="collapse-content bg-gray-200 hover:bg-slate-200 text-primary-content peer-checked:bg-slate-200 peer-checked:text-secondary-content">
                      {/* Konten */}
                      <p>Hello, this is the hidden content!</p>
                      
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
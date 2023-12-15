import { Icon } from '@iconify/react';

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/4 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none mb-5" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Skills</h2>
            <p className="text-xl text-gray-600 mb-5">I excel in delivering innovative and impactful problem-solving.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto  flex flex-wrap gap-6 md:max-w-2xl lg:max-w-none justify-center  items-center">
            {/* 1st item */}
            <div className="relative w-72 flex flex-col items-center p-6 bg-white rounded shadow-xl hover:bg-gray-200">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Programming Language</h4>
              <div className="listSkill-icon mt-2 flex gap-3 items-center">
                {/* js */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-10 h-10" viewBox="0 0 48 48">
                  <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
                </svg>
                {/* ts */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-10 h-10" viewBox="0 0 48 48">
                  <linearGradient id="O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1" x1="15.189" x2="32.276" y1="-.208" y2="46.737" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><rect width="36" height="36" x="6" y="6" fill="url(#O2zipXlwzZyOse8_3L2yya_wpZmKzk11AzJ_gr1)"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986	c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92	c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
                </svg>
                {/* php */}
                <svg className="w-10 h-10"  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64 33.0391C30.26 33.0391 2.90601 46.9011 2.90601 64.0001C2.90601 81.0991 30.26 94.9611 64 94.9611C97.74 94.9611 125.094 81.0991 125.094 64.0001C125.094 46.9011 97.74 33.0391 64 33.0391ZM48.103 70.0321C46.645 71.3961 45.026 71.9591 43.243 72.5391C41.46 73.1201 39.191 73.0001 36.432 73.0001H30.179L28.446 83.0001H21.145L27.66 49.0001H41.7C45.924 49.0001 49.005 50.2151 50.942 52.4321C52.879 54.6491 53.461 57.7961 52.689 61.7691C52.37 63.4061 51.833 64.9281 51.075 66.2841C50.316 67.6411 49.325 68.9081 48.103 70.0321ZM69.414 73.0001L72.295 58.5801C72.623 56.8921 72.503 55.6381 71.934 55.0251C71.364 54.4111 70.152 54.0001 68.299 54.0001H62.509L58.778 73.0001H51.534L58.049 40.0001H65.293L63.561 49.0001H70.014C74.075 49.0001 76.875 49.8151 78.416 51.2311C79.957 52.6471 80.419 54.5871 79.803 57.7591L76.772 73.0001H69.414ZM109.673 61.8221C109.355 63.4591 108.817 64.9551 108.06 66.3101C107.302 67.6671 106.312 68.9081 105.089 70.0321C103.631 71.3961 102.011 71.9591 100.229 72.5391C98.447 73.1201 96.176 73.0001 93.417 73.0001H87.164L85.432 83.0001H78.131L84.645 49.0001H98.686C102.91 49.0001 105.991 50.2151 107.927 52.4321C109.862 54.6491 110.445 57.8501 109.673 61.8221ZM95.919 54.0001H90.918L88.191 68.0001H92.633C95.575 68.0001 97.769 67.7101 99.209 66.6001C100.651 65.4921 101.622 63.7721 102.127 61.1791C102.611 58.6881 102.391 56.7451 101.467 55.7211C100.542 54.6971 98.693 54.0001 95.919 54.0001ZM38.934 54.0001H33.932L31.205 68.0001H35.646C38.589 68.0001 40.782 67.7101 42.223 66.6001C43.664 65.4921 44.636 63.7721 45.14 61.1791C45.624 58.6881 45.404 56.7451 44.48 55.7211C43.556 54.6971 41.708 54.0001 38.934 54.0001Z" fill="#6181B6"/>
                </svg>
                {/* kotlin */}
                <svg className="w-5 h-5" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_89_4)">
                    <path d="M55.783 0L0 58.662V111.1L55.7 55.3L111.1 0H55.783Z" fill="url(#paint0_linear_89_4)"/>
                    <path d="M0 111.104L55.7 55.3042L111.1 111.104H0Z" fill="url(#paint1_linear_89_4)"/>
                    <path d="M0 0H55.783L0 58.662V0Z" fill="url(#paint2_linear_89_4)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_89_4" x1="-18.6648" y1="102.101" x2="84.6582" y2="-1.2221" gradientUnits="userSpaceOnUse">
                    <stop offset="0.108" stop-color="#C757BC"/>
                    <stop offset="0.173" stop-color="#CD5CA9"/>
                    <stop offset="0.492" stop-color="#E8744F"/>
                    <stop offset="0.716" stop-color="#F88316"/>
                    <stop offset="0.823" stop-color="#FF8900"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_89_4" x1="35.4409" y1="131.136" x2="50.4253" y2="71.7961" gradientUnits="userSpaceOnUse">
                    <stop offset="0.296" stop-color="#00AFFF"/>
                    <stop offset="0.694" stop-color="#5282FF"/>
                    <stop offset="1" stop-color="#945DFF"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_89_4" x1="-1.33879" y1="30.6802" x2="35.7126" y2="-2.82998" gradientUnits="userSpaceOnUse">
                    <stop offset="0.296" stop-color="#00AFFF"/>
                    <stop offset="0.694" stop-color="#5282FF"/>
                    <stop offset="1" stop-color="#945DFF"/>
                    </linearGradient>
                    <clipPath id="clip0_89_4">
                    <rect width="111.105" height="111.105" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>

              </div>
            </div>

            {/* 2nd item */}
            <div className="relative w-72 flex flex-col items-center p-6 bg-white rounded shadow-xl hover:bg-gray-200">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Frameworks</h4>
              <div className="listSkill-icon mt-2 flex gap-3 items-center">
                {/* vite */}
                <Icon icon="logos:vitejs" className='w-10 h-10' />
                {/* next */}
                <Icon icon="devicon:nextjs" className='w-10 h-10' />
                {/* laravel */}
                <Icon icon="logos:laravel" className='w-10 h-10' />
                {/* tailwind */}
                <Icon icon="devicon:tailwindcss" className='w-10 h-10' /> 
                {/* bootstrap */}
                <Icon icon="logos:bootstrap" className='w-10 h-10' />
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative w-72 flex flex-col items-center p-6 bg-white rounded shadow-xl hover:bg-gray-200">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
                    <path className="stroke-current text-blue-300" d="M36.571 32H40" />
                    <path className="stroke-current text-white" d="M24 32h3.429" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Library</h4>
              <div className="listSkill-icon mt-2 flex gap-3 items-center">
                {/* React */}
                <Icon icon="logos:react" className='w-10 h-10' />
                {/* JC */}
                <Icon icon="devicon:jetpackcompose" className='w-10 h-10' />
              </div>
            </div>

            {/* 4th item */}
            <div className="relative w-72 flex flex-col items-center p-6 bg-white rounded shadow-xl hover:bg-gray-200">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Database</h4>
              <div className="listSkill-icon mt-2 flex gap-3 items-center">
                {/* MYSQL */}
                <Icon icon="logos:mysql" className='w-10 h-10'/>
              </div>
            </div>

            {/* 5th item */}
            <div className="relative w-72 flex flex-col items-center p-6 bg-white rounded shadow-xl hover:bg-gray-200">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z" />
                    <path className="stroke-current text-blue-300" d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8" />
                    <path className="stroke-current text-white" d="M34.286 29.714L32 32" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Service</h4>
              <div className="listSkill-icon mt-2 flex gap-3 items-center">
                {/* GIT */}
                <Icon icon="logos:git" className='w-10 h-10' />
                {/* node */}
                <Icon icon="vscode-icons:file-type-node"  className='w-10 h-10'/>
                {/* Postman */}
                <Icon icon="devicon:postman"  className='w-10 h-10' />
                {/* notion */}
                <Icon icon="devicon:notion" className='w-10 h-10' />
                {/* trello */}
                <Icon icon="logos:trello" className='w-10 h-10' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
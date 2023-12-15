import { Icon } from '@iconify/react';

const Sosmed = () => {
    return(
        <div className="sosmed flex mt-3 justify-center gap-2">
            <a href="https://www.instagram.com/a.lifanwar" target="_blank">
              <span className="inline-flex items-center rounded-md px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                <Icon icon="skill-icons:instagram" />
              </span>
            </a>
            {/*  github */}
            
            <a href="https://github.com/Hypes-Astro" target="_blank">
              <span className="inline-flex items-center rounded-md px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                <Icon icon="devicon:github" />
              </span>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/muhamad-alif-anwar/" target="_blank">
              <span className="inline-flex items-center rounded-md px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                <Icon icon="skill-icons:linkedin" />
              </span>
            </a>
            
        </div>
    );
}

export default Sosmed;
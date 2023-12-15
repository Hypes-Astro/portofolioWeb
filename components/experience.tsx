import { Icon } from '@iconify/react';

export default function Experience() {
    const openModal1 = () => {
        const modalElement = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        if (modalElement) {
            modalElement.showModal();
        }
    };

    const openModal2 = () => {
        const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (modalElement) {
            modalElement.showModal();
        }
    };

    const openModal3 = () => {
        const modalElement = document.getElementById('my_modal_3') as HTMLDialogElement | null;
        if (modalElement) {
            modalElement.showModal();
        }
    };

    const openModal4 = () => {
        const modalElement = document.getElementById('my_modal_4') as HTMLDialogElement | null;
        if (modalElement) {
            modalElement.showModal();
        }
    };
    return (
        <section className="relative h-52 mt-14 mb-14 flex flex-col items-center">
            <div className="Experience flex justify-center">
                <h1 className="h2" >Experience</h1>
            </div>
            <div className="cardExperience grid md:grid-cols-2 gap-3 mt-5 "  >
                {/* 1 */}
                <button 
                    data-aos="fade-right"
                    onClick={openModal1}
                    className="btn bg-red-100 btn-outline hover:select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    Member Google Developer Students Club UDINUS
                </button>
                <dialog id="my_modal_1" className="modal text-white">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-circle rounded-full  absolute right-2 top-2">✕</button>
                        </form>
                        <div className="headContent flex items-center gap-5">
                            <h3 className="font-bold text-lg">2023 - Now  </h3>
                            <a href='https://gdsc.community.dev/u/mpm8sv/#/about' target="_blank" className='hover:text-slate-400 text-2xl rounded-full '>
                                <Icon icon="ph:share" />
                            </a>
                            
                        </div>
                        <p className="py-4">✨ Join HackFest 2023 Google Hackaton</p>
                    </div>
                </dialog>
                {/* -1- */}

                {/* 2 */}
                <button
                    data-aos="fade-up"
                    onClick={openModal2}
                    className="bg-yellow-100  btn btn-outline hover: select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    Web programming assistant lecturer
                </button>
                <dialog id="my_modal_2" className="modal text-white">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn   absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">2023 - Now</h3>
                        <p className="py-4">✨ Teaching students the basics of web programming to implementing database relations.</p>
                    </div>
                </dialog>
                {/* -2- */}
                {/* 3 */}
                <button  
                    data-aos="fade-left"
                    onClick={openModal3}
                    className="btn bg-blue-100 btn-outline hover: select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    Dinus Open Source Community programming division
                </button>
                <dialog id="my_modal_3" className="modal text-white">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">2022 - Now</h3>
                        <p className="py-4">✨ Executive Chair of the Tealinux 2023 Release Party | Jun 2023</p>
                        <p className="">✨ Moderator Event Doscom Build And Sharing | March 2023</p>
                    </div>
                </dialog>
                {/* -3x- */}

                {/* 4 */}
                <button 
                    data-aos="fade-left"
                    onClick={openModal4}
                    className="btn  bg-green-100 btn-outline hover: select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >
                    Internship Bengkel Koding
                </button>
                <dialog id="my_modal_4" className="modal text-white">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">2023 - Now</h3>
                        <p className="pts--zz">✨ Slicing Web Design to code</p>
                        <p className="">✨ Responsive to devices and easy to use</p>
                        <p className="">✨ Assisting coding workshop students </p>
                    </div>
                </dialog>
                {/* -4x- */}
            </div>
            <a href="https://www.linkedin.com/in/muhamad-alif-anwar/" target="_blank">
                <span className=" mt-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                📌 Likedin
                </span>
            </a>

        </section>
    );
}

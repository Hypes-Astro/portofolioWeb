import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="">
            <div className="mb-2 flex justify-center w-full">
              <Logo />
            </div>
            
          </div>

        </div>


        {/* Bottom area */}

      </div>
    </footer>
  )
}

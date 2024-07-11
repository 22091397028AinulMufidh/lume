import c2 from '../Images/content2.png'
export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Elevate Your Sign Language Skills Today!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Unlock your potential with our advanced sign language courses designed to take your skills to the next level. With interactive lessons and expert guidance,
             mastering sign language has never been easier or more effective.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
      
                      <div className="h-100 w-120 overflow-hidden rounded-lg">
                        <img
                          src={c2}
                          alt=""
                          className="width-xs"
                        />
                      </div>
                      
                    </div>
                   
                  </div>
                </div>
              </div>

              <a
                href="/login"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center mr-96 font-medium text-white hover:bg-indigo-700"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

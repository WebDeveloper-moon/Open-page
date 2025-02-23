import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      
      <div className="overflow-hidden sm:m-top-2 absolute top-[5rem] lg:left-[5rem] md:left-[5rem]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10">
              <p className="text-sm font-medium mb-2">project#name</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Heading
                <br />
                heading!
              </h1>
              <h2 className="text-2xl font-semibold mb-4">Heading</h2>
              <p className="text-gray-600 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed tincidunt nibh nec{" "}
                <span className="text-blue-600">aliquet volutpat</span>.
              </p>
              <p className="text-gray-600 mb-6">
                Etiam ac sapien id metus volutpat consectetur. Curabitur
                tristique purus id risus luctus aliquet. Nunc convallis mi sed
                augue commodo luctus.
              </p>
              <button className="px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300">
                CTA button
              </button>
            </div>

            {/* Right Image */}
            {/* <div className="w-full md:w-1/2 sm:w-0 relative">
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '100%' }}>
                
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <img
        src="/assets/img/1.png"
        alt="Handshake representing connection"
        className="lg:w-[50vw] lg:h-[100vh] md:w-[50vw] md:h-[100vh] md:float-right sm:float-left sm:w-[100%]"
      />
    </div>
  );
}

export default App;

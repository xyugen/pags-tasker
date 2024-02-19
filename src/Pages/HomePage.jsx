import React from 'react'
import TwoMen from '../Assets/TwoMen.png';
import linkLogo from '../Assets/linkLogo.png';


const HomePage = () => {
  return (
      <div className="flex h-[514px] gap-12">
          <div className="w-[717px] flex flex-col flex-grow justify-center break-words">
              <h1 className="font-montserrat text-white text-[96px] break-words font-bold">
                  Lorem Ipsum
              </h1>
              <p className="mb-4 font-poppins text-secondary text-[26px] w-[44rem] break-words">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                  ipsa totam, numquam architecto dolor ut reprehenderit expedita
                  laudantium eos illum.
              </p>
              <div className="flex flex-row gap-3">
                  <button className="text-white bg-primary py-2 px-3 rounded-md font-bold mr-4">
                      New project
                  </button>
                  <div className='relative'>
                      <input
                          className="px-3 py-2 outline-none rounded-md border-[1px] border-secondary text-white bg-transparent pl-9 max-w[150px]"
                          type="text"
                          placeholder="Enter a code or a link."
                      />
                      <img className="absolute top-2 left-2 h-6"
                      src={linkLogo} alt='link-logo'/>
                  </div>
                  <button className="font-bold text-secondary">Join</button>
              </div>
          </div>
          <div className="flex flex-shrink justify-center items-center ">
              <img src={TwoMen} className="w-[380px] h-[380px]" />
          </div>
      </div>
  );
}

export default HomePage
import React from 'react';
import Creative1 from '../assets/Images/Creative.png';

const Creative = () => {
  return (
    <div className='mt-40'>
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <p className="text-sm tracking-[0.2em] uppercase text-gray-400">
          Our Creative Process
        </p>
        <h2 className="text-3xl font-semibold text-[#7C0D37]">
          Our creative process blends curiosity, collaboration, <br />
          <span className="font-bold text-[#1D0F5F]">
            and innovation to bring bold ideas to life.
          </span>
        </h2>
      </div>

      {/* Image */}
      <div className="relative mt-10 ml-32">
        <img src={Creative1} alt="Creative process" className="w-full" />

       
        <div className="absolute top-[37%] left-[1%] text-center w-48">
          <h3 className="text-[#D13636] font-semibold">Research</h3>
          <p className="text-md text-gray-600">
            Until iron is hot with the research, our design head specialists never command the designers to hit.
          </p>
        </div>

        <div className="absolute top-[58%] left-[18%] text-center w-48">
          <h3 className="text-[#1D0F5F] font-semibold">Idea</h3>
          <p className="text-md text-gray-600">
            Ideation is a very necessary step to optimize the process. An idea must be well-versed with the research.
          </p>
        </div>

        <div className="absolute top-[26%] left-[32%] text-center w-48">
          <h3 className="text-[#D13636] font-semibold">Strategy</h3>
          <p className="text-md text-gray-600">
            Strategic planning is a crucial step to deliver the projects on time. Never underestimate the strategy makers.
          </p>
        </div>

       
        <div className="absolute top-[58%] left-[47%] text-center w-48">
          <h3 className="text-[#1D0F5F] font-semibold">Process</h3>
          <p className="text-md text-gray-600">
            Processing the project with detailed research, ideas, and pre-planning is always a cherry on the cake.
          </p>
        </div>

       
        <div className="absolute top-[36%] left-[63%] text-center w-48">
          <h3 className="text-[#D13636] font-semibold">Time</h3>
          <p className="text-md text-gray-600">
            We value your time. Playing with client’s deadlines is not our area. Timely delivery is our first priority.
          </p>
        </div>

   
        <div className="absolute top-[58%] left-[80%] text-center w-48">
          <h3 className="text-[#1D0F5F] font-semibold">Goal</h3>
          <p className="text-md text-gray-600">
            Our goal-oriented vision always gives us fruitful results. Connect with us to achieve your design goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creative;

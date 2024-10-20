import React from 'react';
import Link from 'next/link';


const Rating = () => {
    return (
        
        <div className='max-w-3xl mx-auto text-center py-20 pb-12 md:pb-20'>
        <h1 className="h2 mb-4">BoringSites is rated the Best.</h1>
        <p className="text-xl text-slate-600"> Numbers quantify everything, this is what stands us apart from the competition.</p>


        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
          {/* 1st item */}
          <Link  href={"0"}  className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
            <div>
              <div >
                <h1 className="h3 mb-4 text-slate-500">86%</h1>
                <span className="text-dark font-bold">Ease of Use</span>
              </div>
            </div>
          </Link>

          {/* 2nd item */}
          <Link href={"0"}  className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
            <div>
              <div>
                <h1 className="h3 mb-4 text-slate-500">90%</h1>
                <span className="text-dark font-bold">Ease of Admin</span>
              </div>
            </div>
          </Link>
          {/* 3rd item */}
          <Link  href={"0"} className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
            <div>
              <div>
                <h1 className="h3 mb-4 text-slate-500">91%</h1>
                <span className="text-dark font-bold">Meets requirements</span>
              </div>
            </div>
          </Link>
          {/* 4th item */}
          <Link  href={"0"} className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
            <div>
              <div>
                <h1 className="h3 mb-4 text-slate-500">86%</h1>
                <span className="text-dark font-bold">Ease of Setup</span>
              </div>
            </div>
          </Link>
        </div>

      </div>

    );
};

export default Rating;
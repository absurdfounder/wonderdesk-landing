import React from 'react';
import Link from 'next/link';

const AggregateStats: React.FC = () => {
    return (
        
        <section>

        <div className='max-w-3xl mx-auto text-center py-20 pb-12 md:pb-20'>
          <h1 className="h3 mb-4">More work gets done with BoringSites.</h1>
          <p className="text-xl text-slate-600">Jumpstart your SaaS business with pre-built solutions from BoringSites and our community.</p>


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-4 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <Link href={"0"} className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
              <div>
                <div >
                  <h1 className="h3 mb-4 text-slate-500">86%</h1>
                  <span className="text-dark font-bold">of users save time with BoringSites</span>
                </div>
              </div>
            </Link>

            {/* 2nd item */}
            <Link href={"0"}   className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
              <div>
                <div>
                  <h1 className="h3 mb-4 text-slate-500">90%</h1>
                  <span className="text-dark font-bold">of users replaced 2+ tools</span>
                </div>
              </div>
            </Link>
            {/* 3rd item */}
            <Link href={"0"}   className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
              <div>
                <div>
                  <h1 className="h3 mb-4 text-slate-500">91%</h1>
                  <span className="text-dark font-bold">faster project completion</span>
                </div>
              </div>
            </Link>
            {/* 4th item */}
            <Link href={"0"}   className="relative flex flex-col items-center p-6 bg-white rounded-full h-full">
              <div>
                <div>
                  <h1 className="h3 mb-4 text-slate-500">86%</h1>
                  <span className="text-dark font-bold">less emails sent and received</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>
    );
};

export default AggregateStats;
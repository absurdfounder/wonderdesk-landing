import React from 'react';
import comparisonLibrary from '../../../public/comparison_data.json';

const ComparisonTable = ({ id }: { id: any }) => {



  const libraryItem = (comparisonLibrary.comparision_library).find(item => item.id === id);

  console.log('libraryItem.comparison_table', libraryItem);


  if (!libraryItem) {
    return <p>Library item not found</p>;
  }

  return (
    <div className='max-w-xl mx-auto text-center py-20 pb-12 md:pb-20'>
      <h1 className="h3 mb-4">Get so much more than website builder with BoringSites.</h1>
      <p className="text-xl text-slate-600">BoringSites has everything you need, from task tracking to templates to documentation. Get comfortable — you won’t be leaving all that often.</p>

      <div className="max-w-xl mx-auto p-4">
        <div className="overflow-x-auto p-4 bg-slate-200 rounded">
          <table className="table-auto w-full text-left text-sm bg-slate-200 rounded">
            <thead>
              <tr>
                <th className="px-4 py-2">Features</th>
                <th className="px-4 py-2 text-center ">{libraryItem?.product?.name}</th>
                <th className="px-4 py-2 text-center">BoringSites</th>
              </tr>
            </thead>
            <tbody>
              {libraryItem.comparison_table.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="border px-4 py-4">{item.feature}</td>
                  <td className="border px-4 py-4 text-center">
                    <span className='border border-slate-600 p-2 px-4 rounded-full font-bold'>
                      {item.feature_value[`${libraryItem?.product?.name}`] ? '✓' : '✕'}
                    </span>
                  </td>
                  <td className="border px-4 py-4 text-center">
                    <span className='border bg-orange-600 p-2 px-4 rounded-full font-bold'>
                      {item.feature_value["Notion"] ? '✓' : '✕'}
                    </span>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
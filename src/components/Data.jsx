
import React, { use, } from 'react';
import DataCard from './DataCard';

const Data = ({ dataPromise,setActiveTab,carts,setCarts }) => {
    const datas = use(dataPromise)



    return (
        <div className='py-25'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold pb-5'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="my-5 bg-[#FFFF] tabs tabs-box justify-center">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked onClick={()=>setActiveTab('product')} />
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} onClick={()=>setActiveTab('cart')} />
                
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto place-items-center">
                {
                    datas.map(data => (
                        <DataCard key={data.id} data={data} carts={carts} setCarts={setCarts} />
                    ))
                }
            </div>
        </div>
    );
};

export default Data;
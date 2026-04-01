import { Check, FileText } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DataCard = ({ data,carts,setCarts }) => {
    const [bought, setBought] = useState(false)
    const handleBuying = () => {
        setBought(true)

        const isFound = carts.find(item => item.id === data.id)
        if(isFound){
            toast.error('Item already in cart!')
            return;
        }

        setCarts([...carts,data])
        toast.success('Item added to cart!')
    }



    return (
        <div key={data.id} className="w-full flex justify-center">

            <div className="relative max-w-sm w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:scale-105">

                {/* Tag */}
                <div className="absolute right-4 top-4 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    {data.tag}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                    <FileText className="h-6 w-6 text-slate-700" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {data.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-500">
                    {data.description}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-end">
                    <span className="text-2xl font-bold text-slate-900">${data.price}</span>
                    <span className="ml-1 text-sm text-slate-500">{data.period}</span>
                </div>

                {/* Features  */}
                <ul className="mt-4 space-y-2">
                    {data.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <Check className="h-4 w-4 text-green-500" />
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <button onClick={handleBuying} className="mt-6 w-full rounded-full bg-linear-to-r from-[#5b2df5] to-[#b91cff] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 hover:scale-105 cursor-pointer">
                    {bought ? 'Bought' : 'Buy now'}
                </button>

            </div>

        </div>
    );
};

export default DataCard;
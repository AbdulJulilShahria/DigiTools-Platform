import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ setActiveTab, carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment= () =>{
        setCarts([])
        toast.success('Payment successful!')
    }
    const handleDelete = (cart) =>{
        const filteredArray = carts.filter(c=>c.id!==cart.id)
        setCarts(filteredArray)
        toast.success('Item delete successful!')

    }
    return (
        <>
            <div className=' py-25 text-center'>
                <h2 className='text-5xl font-bold pb-5'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className="my-5 bg-[#FFFF] tabs tabs-box justify-center">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab('product')} />
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} defaultChecked onClick={() => setActiveTab('cart')} />

            </div>
            <div className='p-10'>
                <h2 className='font-bold text-2xl m-5'>Your cart</h2>
                {
                    carts.length===0 ? <p className='text-center text-2xl p-5 '>Your cart is empty</p> :
                    <>
                     <div>
                {

                    carts.map(cart =>


                        <div className='bg-slate-100 border border-gray-200 rounded-lg mx-5 mb-5 px-15 py-5 flex justify-between items-center' key={cart.id}>

                            <div>
                                <h3 className='text-2xl'>{cart.name}</h3>
                                <p className="ml-1 text-sm text-slate-500">${cart.price}</p>
                            </div>
                            <p onClick={()=>handleDelete(cart)} className='cursor-pointer hover:text-red-500 text-red-300'>Remove</p>

                        </div>


                    )


                }
            </div>
            <div className='flex justify-between items-center mx-15'>
                <div>Total </div>
                <div>${totalPrice}</div>
            </div>
            <div className="p-5">
                <button onClick={handlePayment} className="btn w-full text-white text-2xl rounded-full bg-linear-to-r from-[#5b2df5] to-[#b91cff] hover:scale-102 transition">
                    Proceed to Checkout
                </button>
            </div>
                    </>
                }
            </div>

           
        </>
    );
};

export default Cart;
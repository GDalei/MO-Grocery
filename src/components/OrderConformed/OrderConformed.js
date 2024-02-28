import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const OrderConformed = (props) => {
    const global_state = useSelector((state) => {
        return state.addCartReducer.orderConformation
    })
    const dispatch = useDispatch()
    const [open, setOpen] = useState(props.isShow)
    //console.log(">>>>>>>>>>>open.", open)
    const onCloseHandler = ()=>{
        dispatch({type:"ORDER_CONFORMATION_ALERT", payload:false})
    }
    return <>
        {global_state && (<div class=" relative bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
            <div class="flex p-4">
                <div class="flex-shrink-0">
                    <img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                    <button type="button" onClick={onCloseHandler} class="absolute top-3 end-3 inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white">
                        <span class="sr-only">Close</span>
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  color="green" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
                <div class="ms-4 me-5">
                    <h3 class="text-gray-800 font-medium text-sm dark:text-white">
                        <span class="font-semibold text-green-600 ">Thank you for ordering ! </span>  <br />Your order is on the way 
                    </h3>
                    <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Please contact our delivery parterner !
                    </div>
                    <div class="mt-3">
                        <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400">
                            9651548665
                        </button>
                    </div>
                </div>
            </div>
        </div>)}

    </>
}
export default OrderConformed
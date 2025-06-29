import React from 'react'

function Card({myname="Your Name",btnText,newObj}) {
    
  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {myname}
            </h5>
        </a>
        {newObj && (
        <>
          <h2 className="text-red-800 p-4">UserName : {newObj.username} <br />Age:{newObj.age} </h2>
          <h2></h2>
        </>
        )}
        <a href="#" >
             <button className="inline-flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {btnText}
            </button>
        </a>
    </div>
</div>
  )
}

export default Card
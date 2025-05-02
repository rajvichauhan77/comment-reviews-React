import React, { useState } from "react";

function Review (){

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('5')



    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, comment, rating };
        onAddReview(newReview);
        setName('');
        setComment('');
        setRating(5);
      };


    


    return(

        <div className='m-auto mt-15 border rounded-2xl w-xl p-5'>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
         
          <div className="mb-5">
            <label for="name" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Your password</label>
            <input 
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Name' required />
          </div>

          <div className=" items-start mb-5">

              <textarea
               className='border py-1 px-5'
                placeholder="Your Review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />

              <br />
              
               <select className="px-5 py-2 my-2" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                    <option value={1}>1 Star⭐</option>
                    <option value={2}>2 Stars⭐⭐</option>
                    <option value={3}>3 Stars⭐⭐⭐</option>
                    <option value={4}>4 Stars⭐⭐⭐⭐</option>
                    <option value={5}>5 Stars⭐⭐⭐⭐⭐</option>
                </select>
            
          </div>
          <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
        </form>

      </div>
    )
}
export default Review
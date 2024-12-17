import React, { useState } from 'react'
import Navbar from './navbar'
import Rating from '@mui/material/Rating';
import axios from 'axios';

const FeedbackForm = () => {
  const [category, setCategory] = useState('Product Features');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      category,
      rating,
      comments,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/feedback', feedbackData);

      console.log(response.data);

      setCategory('Product Features');
      setRating(0);
      setComments('');
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className=''>
      <Navbar />
      <p className='text-blue-400 font-bold text-4xl pt-16 text-center'>Feedback form</p>
      <div className='w-full h-full flex justify-center pt-3'>
        <div className='w-1/3 h-2/3 border-blue-400 border-solid border-4 rounded-xl'>
          <form onSubmit={handleSubmit} className='px-10 py-8'>
            {/* category */}
            <div className="mb-4">
              <label className="block text-blue-400 font-bold text-lg mb-2">Category:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border-solid border-2 border-black rounded bg-white"
              >
                <option value="Product Features">Product Features</option>
                <option value="Product Pricing">Product Pricing</option>
                <option value="Product Usability">Product Usability</option>
              </select>
            </div>

            {/* rating */}
            <label className='block text-blue-400 font-bold text-lg mb-2'>Rating</label>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              precision={0.5}
              size="large"
            />
            <div className="mb-4">
              <label className="block text-blue-400 font-bold text-lg mb-2">Comment:</label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full h-28 px-3 py-2 border-black border-solid border-2 rounded-md"
                placeholder='write a comment'
              />

              <div className='w-full flex justify-center pt-5'>
                <button
                  type="submit"
                  className="w-2/3 bg-blue-400 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-500 shadow-lg "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FeedbackForm
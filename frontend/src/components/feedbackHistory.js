import React, { useEffect, useState } from 'react';
import Navbar from './navbar';

const FeedbackHistory = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/feedback/data');
        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const data = await response.json();
        console.log(data)
        setFeedbackData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFeedback();
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure, you want to delete")) {
      try {
        const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete feedback');
        }
        setFeedbackData((prevData) => prevData.filter((feedback) => feedback._id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <h1 className='text-center text-3xl font-bold my-5'>Feedback History</h1>
      {error && <p>{error}</p>}
      {feedbackData.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <div className='flex justify-center'>
          <div className='w-2/4 '>
            {feedbackData.map((feedback) => (
              <div className='border-2 border-solid p-4 pb-7 my-5 shadow-md rounded-md shadow-blue-400 hover:scale-105 duration-500 flex justify-between'>
                <div key={feedback._id} className="">
                  <div className="">
                    <strong>Category:</strong> {feedback.category}
                  </div>
                  <div className="feedback-rating">
                    <strong>Rating:</strong> {feedback.rating}
                  </div>
                  <div className="feedback-comments">
                    <strong>Comments:</strong> {feedback.comments}
                  </div>

                </div>
                <button
                  className="bg-red-500 text-white h-8 px-6 rounded self-center"
                  onClick={() => handleDelete(feedback._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackHistory;

'use client'
import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddComment = () => {
    if (inputValue.trim() !== '') {
      setComments([]);
      setInputValue('');
    }
  };

  return (
    <div className="max-w-xl h-full mx-auto mt-10 p-4 bg-white/50 rounded-lg shadow-lg mb-44">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment..."
        ></textarea>
        <button
        onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Post Comment
        </button>
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-2 p-3 bg-gray-100 rounded-md shadow-sm"
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

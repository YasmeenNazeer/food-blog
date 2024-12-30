"use client";

import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]); // List of comments
  const [name, setName] = useState(""); // Name input
  const [comment, setComment] = useState(""); // Comment input

  // Function to handle submitting a comment
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure both fields are filled
    if (!name || !comment) {
      alert("Please fill out both fields!");
      return;
    }

    // Add the new comment to the list
    const newComment = { name, comment };
    setComments([...comments, newComment]);

    // Clear the input fields
    setName("");
    setComment("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-lime-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full bg-gray-100 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block w-full p-3 mb-4 border bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-lime-500 text-white py-3 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          Post Comment
        </button>
      </form>

      <div>
        <h3 className="text-2xl font-bold mb-4">Comments</h3>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
            >
              <p className="font-bold text-lime-600 mb-2">{c.name}:</p>
              <p className="text-gray-700">{c.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
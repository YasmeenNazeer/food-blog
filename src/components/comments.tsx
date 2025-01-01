"use client";

import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<
    { id: number; name: string; comment: string; important: boolean }[]
  >([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Add a new comment
  const handleAddComment = () => {
    if (!name.trim() || !comment.trim()) {
      alert("Both name and comment fields are required!");
      return;
    }

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      comment: comment.trim(),
      important: false,
    };

    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  // Toggle important status
  const toggleImportant = (id: number) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, important: !c.important } : c
      )
    );
  };

  // Delete a comment
  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  // Edit a comment
  const handleEditComment = (id: number) => {
    const existingComment = comments.find((c) => c.id === id);
    if (!existingComment) return;

    const updatedComment = prompt(
      "Edit your comment:",
      existingComment.comment
    );
    if (updatedComment && updatedComment.trim()) {
      setComments(
        comments.map((c) =>
          c.id === id ? { ...c, comment: updatedComment.trim() } : c
        )
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-lime-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-lime-600 mb-6">
        Comment Section
      </h2>

      {/* Input Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block w-full p-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[100px]"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="w-full bg-lime-400 text-black text-[19px] font-mono py-2 rounded-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div>
        <h3 className="text-2xl font-bold text-black font-sans mb-4">
          Comments
        </h3>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className={`flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg shadow-md ${
                  comment.important ? "bg-gray-100" : "bg-lime-100"
                }`}
              >
                <div className="w-full max-w-full break-words">
                  <p className="font-bold text-lime-600 mb-1">{comment.name}</p>
                  {/* Long comments handled */}
                  <p className="text-gray-700 break-words">{comment.comment}</p>
                </div>

                <div className="flex items-center gap-2 mt-3 md:mt-0">
                  {/* Mark as Important */}
                  <button
                    onClick={() => toggleImportant(comment.id)}
                    className={`px-3 py-1 rounded-lg ${
                      comment.important
                        ? "bg-lime-500 text-white hover:bg-lime-600"
                        : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                    }`}
                  >
                    {comment.important ? "Unmark" : "Mark Important"}
                  </button>
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEditComment(comment.id)}
                    className="text-lime-500 hover:text-lime-500 font-bold"
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-500 hover:text-red-600 font-bold"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 text-[17px] font-serif">
            No comments yet. Be the first to add one!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;

'use client';

import { XMark } from '@medusajs/icons'; // If you use this, ensure it's installed or replace with a similar icon
import React, { useState } from 'react';
import axios from 'axios';

const ReviewTemplate = ({ item }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    // For simplicity, array of stars for rating
    const [hovered, setHovered] = useState(0);

    const submitReview = async () => {
        try {
            await axios.post('/api/reviews', {
                item_id: item.id,
                review,
                rating,
            });
            alert('Review submitted successfully!');
        } catch (error) {
            alert('Failed to submit review');
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center mb-4">
                <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    className="w-24 h-24 mr-4"
                />
                <div>
                    <h1 className="text-xl font-semibold">{item?.title}</h1>
                    <p>{item?.description}</p>
                </div>
            </div>
            <div>
                <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            className={`text-2xl ${star <= (hovered || rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                            onMouseEnter={() => setHovered(star)}
                            onMouseLeave={() => setHovered(0)}
                            onClick={() => setRating(star)}
                        >
                            ★
                        </button>
                    ))}
                </div>
                <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="What do you think of this product?"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={submitReview}
            >
                Submit Review
            </button>
        </div>
    );
};

export default ReviewTemplate;

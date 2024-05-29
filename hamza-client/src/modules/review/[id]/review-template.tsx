'use client';

import React, { useState } from 'react';
import axios from 'axios';
import useItemStore from '@store/review/review-store';
import { Button } from '@medusajs/ui';
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

const ReviewTemplate = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);

    const item = useItemStore((state) => state.item);

    const submitReview = async () => {
        try {
            await axios.post(`${BACKEND_URL}/custom/review`, {
                customer_id: item?.customer_id,
                product_id: item?.variant_id,
                rating,
                content: review,
                title: 'Review for ' + item?.title, // Assuming a title is needed
                order_id: item?.order_id,
            });
            alert('Review submitted successfully!');
            setReview('');
            setRating(0);
        } catch (error) {
            alert('Failed to submit review: ' + error.message);
        }
    };

    const ratingDescriptions = [
        'Extremely Bad',
        'Dissatisfied',
        'Fair',
        'Satisfied',
        'Delighted',
    ];

    return (
        <div className="p-4 bg-white shadow-md rounded-lg text-black">
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
                <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            className={`text-2xl ${star <= (hovered || rating) ? 'text-yellow-500' : 'text-gray-400'}`}
                            onMouseEnter={() => setHovered(star)}
                            onMouseLeave={() => setHovered(0)}
                            onClick={() => {
                                setRating(star);
                                setHovered(star);
                            }}
                        >
                            ★
                        </button>
                    ))}
                    <span className="ml-2 text-sm font-medium text-black self-center">
                        {ratingDescriptions[rating - 1] || ''}
                    </span>
                </div>
                <p className="text-black">Review Detail</p>
                <textarea
                    className="w-full p-2 border rounded text-black"
                    rows="4"
                    placeholder="What do you think of this product?"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <Button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={submitReview}
                    disabled={rating === 0 || review.trim() === ''}
                >
                    Submit Review
                </Button>
            </div>
        </div>
    );
};

export default ReviewTemplate;

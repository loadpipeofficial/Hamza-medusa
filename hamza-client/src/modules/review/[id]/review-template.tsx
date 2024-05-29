'use client';

import { XMark } from '@medusajs/icons'; // If you use this, ensure it's installed or replace with a similar icon
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useItemStore from '@store/review/review-store';
import { Button } from '@medusajs/ui'; // Adjust the import path to where your store is defined
import Medusa from '@medusajs/medusa-js';

const ReviewTemplate = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);

    const medusa = new Medusa({
        baseUrl: 'http://localhost:9000',
        maxRetries: 3,
    });

    const item = useItemStore((state) => state.item);
    console.log(`item is ${JSON.stringify(item)}`);
    console.log(`Item Variant id is ${item?.variant_id}`);

    // const submitReview = async () => {
    //     try {
    //         await axios.post('/api/reviews', {
    //             item_id: item.id,
    //             review,
    //             rating,
    //         });
    //         alert('Review submitted successfully!');
    //     } catch (error) {
    //         alert('Failed to submit review');
    //     }
    // };

    const ratingDescriptions = [
        'Extremely Bad', // Index 0 for 1 star
        'Dissatisfied', // Index 1 for 2 stars
        'Fair', // Index 2 for 3 stars
        'Satisfied', // Index 3 for 4 stars
        'Delighted', // Index 4 for 5 stars
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
                                setHovered(star); // Ensure hovered updates to reflect the selected star
                            }}
                        >
                            ★
                        </button>
                    ))}
                    <span className="ml-2 text-sm font-medium text-black self-center">
                        {hovered
                            ? ratingDescriptions[hovered - 1]
                            : ratingDescriptions[rating - 1] || ''}
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
            </div>
            <Button className="m-4">Submit Review</Button>
        </div>
    );
};

export default ReviewTemplate;

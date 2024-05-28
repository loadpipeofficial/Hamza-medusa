'use client';

import { Item } from '@medusajs/medusa';
import { XMark } from '@medusajs/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type ReviewTemplateProps = {
    item: Item;
};

const ReviewTemplate: React.FC<ReviewTemplateProps> = ({ item: Item }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    // const submitReview = async () => {
    //     try {
    //         await axios.post('/api/reviews', {
    //             order_id: order.id,
    //             review,
    //             rating,
    //         });
    //         alert('Review submitted successfully!');
    //     } catch (error) {
    //         alert('Failed to submit review');
    //     }
    // };

    return (
        <div>
            {/*<h1>Review Order #{order.display_id}</h1>*/}
            {/*<p>{order.description}</p>*/}
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <input
                type="number"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value, 10))}
            />
            {/*<button onClick={submitReview}>Submit Review</button>*/}
        </div>
    );
};

export default ReviewTemplate;

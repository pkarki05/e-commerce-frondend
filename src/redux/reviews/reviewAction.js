import { toast } from 'react-toastify';
import { db } from '../../firrebase/firebaseConfig';
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { addReview, setReview } from './ReviewSlice';

// Action to submit a review
export const submitReview = (productId, reviewData, productTitle, user) => async (dispatch) => {
    try {
        // Ensure userId is defined before proceeding
        if (!reviewData.userId) {
            throw new Error('User ID is missing in reviewData');
        }

        // Add review to Firestore
        const reviewsCollection = collection(db, 'Reviews');
        await addDoc(reviewsCollection, {
            productId: productId,
            user: user,
            productTitle: productTitle,
            userId: reviewData.userId,
            rating: reviewData.rating,
            comment: reviewData.comment,
            timestamp: serverTimestamp()
        });

        // Prepare the review payload for Redux
        const reviewPayload = {
            productId: productId,
            review: {
                rating: reviewData.rating,
                comment: reviewData.comment,
                user: user,
                productTitle: productTitle,
            },
        };

        // Dispatch the addReview action to Redux
        dispatch(addReview(reviewPayload));

        toast.success('Review submitted successfully');
    } catch (error) {
        console.error('Error submitting review:', error);
        toast.error('Failed to submit review');
    }
};

// Action to fetch user reviews for a product
export const getUserReview = (productId) => async (dispatch) => {
    try {
        // Construct a query to fetch reviews where productId matches
        const reviewsCollectionRef = collection(db, 'Reviews');
        const q = query(reviewsCollectionRef, where('productId', '==', productId));

        // Execute the query and get the snapshot of the results
        const querySnapshot = await getDocs(q);

        // Extract reviews from the query snapshot
        const reviews = [];
        querySnapshot.forEach((doc) => {
            reviews.push(doc.data());
        });

        // Dispatch the setReview action to Redux
        dispatch(setReview({ productId: productId, reviews: reviews }));

    } catch (error) {
        console.error('Error fetching reviews:', error);
        toast.error('Failed to fetch reviews');
    }
};

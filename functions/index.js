const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const stripe = require('stripe')(functions.config().stripe.secret);

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'POST') {
            return res.status(405).send({ error: 'Method not allowed' });
        }
        const amount = req.body.amount;
        const currency = req.body.currency || 'usd';

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            });

            res.status(200).send({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error('Error creating payment intent:', error);
            res.status(500).send({ error: 'Unable to create payment intent' });
        }
    });
});

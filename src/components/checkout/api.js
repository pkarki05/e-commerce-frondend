export const fetchClientSecret = async (amount) => {
  try {
    const response = await fetch('https://us-central1-e-commerce-project-learning.cloudfunctions.net/createPaymentIntent/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch client secret:', error);
    throw error;
  }
};

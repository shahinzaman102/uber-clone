# 🚖 Uber Clone (Minimal)

This is a minimal Uber clone project built primarily to showcase Google Maps integration using:

* 🗺️ Places API — for location autocomplete and place details

* 🧭 Directions API — for drawing routes between pickup and drop-off points

* 📏 Distance Matrix API — for estimating travel time and distance

The core functionality allows a user to:

* Select a pickup and drop-off location using Google Places Autocomplete

* View the route drawn on a map

* Calculate and display estimated distance and duration

* Simulate requesting a ride (no actual booking or backend logic) 

## 🧪Future Improvements (Optional Enhancements)

This basic Uber-style app can be improved with more advanced features for a more realistic testing and user experience:

### 💳 Payment Integration

Add functionality to process in-app payments using platforms like Stripe, Razorpay, or PayPal.

### 🍔 Uber Eats Module

Extend the app to include food ordering and delivery, similar to Uber Eats, with restaurant menus, order tracking, and driver integration.

### 📲 Deployment Readiness

The project can be further prepared for production and released on platforms like the Google Play Store after:

* Adding proper backend and database integration

* Implementing user authentication

* Ensuring security best practices are followed

* Performing rigorous testing on various Android devices

### ⚙️ Tech Stack

**Frontend:** React Native (or any mobile framework of your choice)

**Maps Integration:** Google Maps SDK

**APIs Used:**

* Google **Places API**

* Google **Directions API**

* Google **Distance Matrix API**

## 📦 Setup Instructions

Clone the repository:

    git clone <https://github.com/shahinzaman102/uber-clone>
    cd uber-clone

Install dependencies:

    yarn install
    - Then, Configure the .env file with your Google Maps API Key and enable the required APIs in your Google Cloud Console.

Run the app:

    yarn start --reset-cache

## 📝 Disclaimer

This is a learning/demo project and is not affiliated with Uber Technologies, Inc. It is built purely to demonstrate the use of Google Maps APIs within a mobile app context.

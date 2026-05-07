# 🍴 TastyShare

TastyShare is a **modern recipe sharing web application** built with **React, Firebase Authentication, MongoDB, Express.js, and JWT**.  
It allows users to explore, share, and save delicious recipes — all while ensuring secure authentication and personalized data fetching.

---

[![Website](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://tasty-share.web.app/)
[![Server](https://img.shields.io/badge/GitHub-Repo-black?style=flat-square&logo=github)](https://github.com/ekra024/tasty-share-server)

---

## ✨ Features

- 🔐 **Firebase Authentication**
  - Email/Password login & registration
  - Google sign-in
  - Protected routes using JWT token verification

- 👩‍🍳 **User Dashboard**
  - Users can view their uploaded recipes
  - Fetch user-specific data securely using verified JWT & email

- 🍔 **Recipe Management**
  - Add, update, and delete recipes
  - View detailed recipe cards with images and ingredients

- 🎨 **Modern UI**
  - Built with **Tailwind CSS** and **DaisyUI**
  - Responsive and mobile-friendly
  - Uses **React Icons** and **Google Fonts** for an elegant look

- ⚙️ **Secure API**
  - Backend built with **Express.js**
  - **JWT-based authentication** for verifying users
  - **MongoDB** for data storage
  - **Axios** for smooth client-server communication

---

## 🧩 Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | React, React Router, Tailwind CSS, Daisy UI, React Icons, Google Fonts |
| **Backend** | Node.js, Express.js, MongoDB, JWT |
| **Auth & Hosting** | Firebase Authentication |
| **Data Fetching** | Axios |
| **Version Control** | Git & GitHub |

---

## 🚀 Installation / Running Locally

1. Clone the repository:
```bash
git clone https://github.com/YourUsername/tastyShare.git

cd tastyShare
npm install

.env.local
VITE_apiKey="your_api_key"
VITE_authDomain="your_auth_domain"
VITE_projectId="your_project_id"
VITE_storageBucket="your_storage_bucket"
VITE_messagingSenderId="your_messaging_sender_id"
VITE_appId="your_app_id"
VITE_API_URL="https://backend-sigma-flame-93.vercel.app/api"
VITE_image_upload_key=your_image_upload_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key 

To run
npm run dev




# 🚀 Aura – AI Chat & Image Generation Platform

Aura is a full-stack AI-powered application that allows users to chat with AI, generate images, publish them to a community feed, and manage usage via a credit-based system.

🚀 **Project is live here:**  
👉 https://quick-gpt-five-green.vercel.app/
---

## 🌟 Features

- 💬 AI Text Chat (Gemini API)
- 🖼️ AI Image Generation (ImageKit)
- 🌍 Community Image Feed
- 🔐 JWT Authentication
- 💳 Credit-based usage system
- 🌗 Dark / Light Mode
- ⚡ Fast & Responsive UI
- 🔒 Secure Backend APIs

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-blue?logo=axios)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)

### AI & Media
![Gemini](https://img.shields.io/badge/Gemini-AI_Model-blueviolet)
![ImageKit](https://img.shields.io/badge/ImageKit-Image_CDN-orange)

### Payments
![Stripe](https://img.shields.io/badge/Stripe-Payments-blue?logo=stripe)

### Tools
![Git](https://img.shields.io/badge/Git-Version_Control-red?logo=git)
![GitHub](https://img.shields.io/badge/GitHub-Code_Hosting-black?logo=github)
![Postman](https://img.shields.io/badge/Postman-API_Testing-orange?logo=postman)

---

## ⚠️ Current Limitations & Future Improvements

### 💳 Stripe Integration (Work in Progress)

The Stripe payment system is **partially implemented** and currently **not fully optimized for production use**.

**Current State:**
- Stripe is integrated for handling payments and credit purchases.
- Basic payment flow works in test mode.
- Webhooks are implemented but not yet hardened for all edge cases.

**Limitations:**
- No retry handling for failed or delayed webhooks
- No subscription-based plans (one-time credits only)
- Limited validation for duplicate or interrupted transactions

**Planned Improvements:**
- ✅ Full production-ready Stripe configuration
- 🔁 Robust webhook retry & verification logic
- 📦 Subscription and recurring payment plans
- 🧾 Invoice history & transaction tracking
- 🛡️ Improved payment failure handling

---

### 🖼️ ImageKit Usage (Free Trial Limitation)

ImageKit is currently used for **AI image hosting and delivery**.

**Important Note:**
- The project is running on **ImageKit’s free trial plan**
- Free-tier credits are **limited** and may **expire or exhaust**
- Once credits are depleted:
  - Image uploads may fail
  - Previously uploaded images may stop serving

**Future Plan:**
- 🔄 Upgrade to a paid ImageKit plan **or**
- ☁️ Migrate to alternative storage solutions such as:
  - AWS S3
  - Cloudinary
  - Google Cloud Storage

---


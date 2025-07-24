# 📝 Narrative – Full Stack Blogging Platform

**Narrative** is a full-stack blogging platform built with a modern web stack, including:

- 🌐 **Frontend**: React, Vite, Tailwind CSS, TypeScript
- ⚙️ **Backend**: Cloudflare Workers with [Hono](https://hono.dev/) 
- 🧩 **Validation & Typing**: Zod
- 💾 **Database**: PostgreSQL with Prisma ORM
- 📦 **Shared Module**: Common package for shared types and schemas 

---

## 🚀 Project Overview

Narrative allows users to:

- Sign up and authenticate securely
- Create, edit, and view blog posts
- View a feed of all published blogs
- Deploy the full-stack app on **Vercel (frontend)** and **Cloudflare Workers (backend)**

This project emphasizes edge deployment, API route structuring, schema validation with Zod, and scalable modular design.

---

## ✨ Features

- 🔐 JWT-based Authentication
- 📄 RESTful API with Hono
- ⚡ Deployed on edge using Cloudflare Worker
- 📚 Type-safe request/response validation with Zod
- 📦 Monorepo-style structure (with a shared `common` package)
- 🧪 Fully testable routes using Postman

---

## 📁 Folder Structure

    narrative/
    ├── backend/       
    │   ├── routes/    
    │   ├── middleware/
    │   └── index.ts   
    │
    ├── frontend/      
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── main.tsx
    │
    ├── common/        
    │   └── index.ts
    │
    ├── .gitignore
    ├── wrangler.toml 
    └── README.md

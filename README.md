# AngularEcommerce

A simple E-Commerce web application built with Angular 20.
Includes JWT authentication, a mock backend, and token-based API calls.

# Features

**User Authentication**
Login page with JWT-based authentication

Token saved and sent to backend via interceptor

**Mock Backend**
json-server with db.json for users
Simulates REST API endpoints

**Interceptor**

Protects routes for authenticated users

Automatically attaches JWT token to HTTP requests

Services, Interceptors, and Environment configs

🛠**Tech Stack**
Frontend: Angular 20, TypeScript
Backend (Mock): JSON Server
Authentication: JWT
HTTP Client: Angular HttpClient with Interceptor

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/rohitware/angular-ecommerce.git
cd angular-ecommerce

2️⃣ Install dependencies
npm install

3️⃣ Run JSON Server (Mock Backend)
npm install -g json-server
json-server --watch db.json --port 3000
Endpoints:
http://localhost:3000/users

4️⃣ Run Angular App
ng serve
Open http://localhost:4200 in your browser.

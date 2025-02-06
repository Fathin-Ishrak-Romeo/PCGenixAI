# What is PCGenixAI
An online shop for PC components and an AI-based components recommendation system to build your custom PC.

# Services Used
1. Database Service: [Supabase](https://supabase.com/)
2. Contact Form Service: [EmailJS](https://dashboard.emailjs.com/sign-up) 

# Features (Currently available ✅, Currently unavailable ❌)
- **User Authentication** <br>
  ✅ Login as Customer <br>
  ❌ Login as Admin <br>
  ❌ Login as PC Building Specialist <br>
  ✅ Sign up, log in, and log out <br>
  ✅ Update username and change password

- **Shop** <br>
  ✅ Browse PC components <br>
  ✅ Advanced filters: search bar, category-wise search, brand-wise search, price range-wise search, and sorting (Price High to Low, Low to High, Name A to Z, Z to A) <br>
  ✅ Reset filters

- **PC Build Generator** <br>
  ✅ Input: Usage category and budget range <br>
  ✅ Output: Recommend components required to build a PC for the given usage within the budget range <br>
  ✅ Price breakdown for generated components <br>
  ✅ Option to add recommended components to the cart

- **Manual Selection** <br>
  ✅ Choose components from the shop manually <br>
  ✅ Price breakdown for selected components <br>
  ✅ Add to cart functionality

- **Shopping Cart** <br>
  ✅ Add components from the shop, PC Build Generator, and manual selection <br>
  ✅ Select item quantity and delete items <br>
  ✅ View order summary (Subtotal, 10% VAT, Total) <br>

- **Payment System** <br>
  ✅ Payment method selection: VISA Card, Master Card, Credit Card, Bank Transfer, BKash, Nagad, Rocket

- **Support & Engagement** <br>
  ✅ Contact form <br>
  ✅ Chatbot with suggested and category-based questions <br>
  ❌ Live chat with PC building specialists <br>
  ✅ FAQ and About section <br>
  ✅ Social media links integration <br>

- **UI/UX Enhancements** <br>
  ✅ Light & dark theme support <br>
  ✅ 3D interactive image on the homepage <br>
  ✅ Typing effect on the homepage

- **Wishlist** <br>
  ❌ Add the items that the customer wants to purchase in the future

- **Order History** <br>
  ❌ All order history with payment receipts under a specific account

# Tech Stack
- **Frontend:** TypeScript, React (App.tsx as the main file)
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Payment Gateway:** Stripe, Local Payment APIs

# Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/pc-builder.git
   cd pc-builder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add necessary keys (API keys, database connection URL, etc.)

4. Start the development server:
   ```sh
   npm run dev
   ```

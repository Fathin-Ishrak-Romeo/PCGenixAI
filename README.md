# What is PCGenixAI
An online shop for PC components and an AI-based components recommendation system to build your custom PC.

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

- **Payment Gateway** <br>
  ❌ Implement the payment gateway for successful payment transaction


# Tech Stack
- **Frontend:** TypeScript, React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** [Supabase](https://supabase.com/)
- **Authentication:** [Supabase Authentication](https://supabase.com/)
- **Contact Form:** [EmailJS](https://dashboard.emailjs.com/sign-up) for email support

# Installation & Setup
### Step 1: Clone the repository:
   ```sh
   git clone https://github.com/Fathin-Ishrak-Romeo/PCGenixAI.git
   cd PCGenixAI
   ```
### Step 2: Install IDE
- Ensure you have any IDE **(e.g. VS Code)** installed. Download **VS Code** from [VS Code official website](https://code.visualstudio.com/)

### Step 3: Install Node.js
- Ensure you have **Node.js** installed. Download it from [Node.js official website](https://nodejs.org/).

### Step 4: Configure Environment Variables
Create a `.env` file in the root directory and add the required configuration:
   ```sh
   PORT=5000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_USER_ID=your_emailjs_user_id
   ```

### Step 5: Install Dependencies
Run the following command into the VS Code terminal to install all necessary packages:
   ```sh
   npm install
   ```

### Step 6: Start the Development Server
Run the following command into the VS Code terminal to run the backend and frontend servers:
   ```sh
   npm run dev
   ```
This will start the development server. In the terminal, a localhost link (e.g., `http://localhost:3000`) will appear. Copy and paste the link into your browser to access the application. 

### Step 7: Testing
- Register a new user and log in.
- Browse PC components and test the filtering options.
- Use the PC Build Generator to generate a build.
- Use the Manual Selection to select components manually.
- Add components to the cart and proceed with testing.
- Contact support using the chatbot or contact form.

# Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

# License
This project is licensed under the MIT License.

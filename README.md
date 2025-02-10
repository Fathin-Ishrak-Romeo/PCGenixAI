# What is PCGenixAI?
An online shop for PC components and an AI-based components recommendation system to build your custom PC.

## User Manual
[PCGenixAI User Manual Video](https://drive.google.com/file/d/1fhNoyF8JeRiF2Gp6AAxL4vjB9IuVrkkI/view?usp=drive_link)

## Submitted Version
[PC Builder: A Haven to Custom Built PC](https://github.com/Fathin-Ishrak-Romeo/CSE471_Final-Project_PC-Builder-Website_A-haven-to-custom-built-PC)

## Earlier versions
https://github.com/Fathin-Ishrak-Romeo/471Project_Rough-work

---

# Features (Currently available ✅, Currently unavailable ⬜)
- **User Authentication**  
  ✅ Sign up, log in, and log out <br>
  ✅ Login as Customer <br>
  ⬜ Login as Admin <br>
  ⬜ Login as PC Building Specialist <br>
  ✅ Update username and change password <br>
  ⬜ Forget password option

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
  ⬜ Live chat with PC building specialists <br>
  ✅ FAQ and About section <br>
  ✅ Social media links integration <br>

- **UI/UX Enhancements** <br>
  ✅ Light & dark theme support <br>
  ✅ 3D interactive image on the homepage <br>
  ✅ Typing effect on the homepage

- **Wishlist** <br>
  ⬜ Add the items that the customer wants to purchase in the future

- **Order History** <br>
  ⬜ All order history with payment receipts under a specific account

- **Payment Gateway** <br>
  ⬜ Implement the payment gateway for successful payment transaction

---


# Tech Stack
- **Frontend:** TypeScript, React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** [Supabase](https://supabase.com/)
- **Authentication:** [Supabase Authentication](https://supabase.com/)
- **Contact Form:** [EmailJS](https://dashboard.emailjs.com/sign-up) for email support

---

# Installation & Setup (For Normal Users)
#### Step 1: Download the ZIP file of the project
  
![image](https://github.com/user-attachments/assets/8adf13a9-0c53-421e-adee-8a808ddb55e8)

- Extract the ZIP flie

#### Step 2: Install IDE
- Ensure you have any IDE **(e.g. VS Code)** installed. Download **VS Code** from [VS Code official website](https://code.visualstudio.com/)
- Open the extracted project folder on VS Code

#### Step 3: Install Node.js
- Ensure you have **Node.js** installed. Download it from [Node.js official website](https://nodejs.org/).

#### Step 4: Configure Environment Variables
Create a `.env` file in the root directory and add the required configuration:
   ```sh
   PORT=5000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_USER_ID=your_emailjs_user_id
   ```

#### Step 5: Install Dependencies
Run the following command into the VS Code terminal to install all necessary packages:
   ```sh
   npm install
   ```

#### Step 6: Start the Development Server
Run the following command into the VS Code terminal to run the backend and frontend servers:
   ```sh
   npm run dev
   ```
This will start the development server. In the terminal, a localhost link (e.g., `http://localhost:3000`) will appear. Copy and paste the link into your browser to access the application. 

#### Step 7: Testing
- Register a new user and log in.
- Browse PC components and test the filtering options.
- Use the PC Build Generator to generate a build.
- Use the Manual Selection to select components manually.
- Add components to the cart and proceed with testing.
- Contact support using the chatbot or contact form.

---

# Setup Using Git (For Developers only)

This method is recommended for developers who want to:
- Contribute to the project
- Stay updated with the latest changes
- Switch between different versions
- Create custom modifications

#### Prerequisites
1. Install Git: [Download Git](https://git-scm.com/downloads)

#### Initial Setup
1. **Clone the Repository**:
   ```bash
   # Using HTTPS
   git clone https://github.com/Fathin-Ishrak-Romeo/PCGenixAI.git
   ```

2. **Navigate to Project Directory**:
   ```bash
   cd PCGenixAI
   ```

3. **Switch to the Main Branch**:
   ```bash
   git checkout main
   ```
   
4. **Install Dependencies**:
   ```bash
   pnpm install
   ```

5. **Start the Development Server**:
   ```bash
   pnpm run dev
   ```

#### Staying Updated

To get the latest changes from the repository:

1. **Save Your Local Changes** (if any):
   ```bash
   git stash
   ```

2. **Pull Latest Updates**:
   ```bash
   git pull origin main
   ```
   
3. **Update Dependencies**:
   ```bash
   pnpm install
   ```

4. **Restore Your Local Changes** (if any):
   ```bash
   git stash pop
   ```
#### Troubleshooting Git Setup

If you encounter issues:

1. **Clean Installation**:
   ```bash
   # Remove node modules and lock files
   rm -rf node_modules pnpm-lock.yaml

   # Clear pnpm cache
   pnpm store prune

   # Reinstall dependencies
   pnpm install
   ```

2. **Reset Local Changes**:
   ```bash
   # Discard all local changes
   git reset --hard origin/main
   ```

Remember to always commit your local changes or stash them before pulling updates to avoid conflicts.

---


# Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

# License
This project is licensed under the MIT License.

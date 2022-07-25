
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import styles from './Layout.module.scss'


export default function Layout({ children }) {
    return (
        <div className="App">
            <Header />
        
            <div className={styles.margin}>{children}</div>
            <Footer />
           <div>
           ## Deliverable 4

<p> **Goal**: In this assignment, you will continue working on your Ecommerce Store. It should contain the following:</p>
<p> - Product Detail Page (with “Add to Cart” functionality)</p>
<p> - Shopping Cart Page</p>
<p> - Checkout Page</p>
<p>**Related topics:** React Router, Global State Management, Design Patterns, Best Practices & Performance Optimizations</p>
<p>## Before you start</p>
<p>ollow these steps before you begin:</p>
<p>. Merge your branch from the previous deliverable into main in your own GitHub repo</p>
<p>. Create a new branch with the name `feat/deliverable4` derived from main on your repo</p>
<p>. Read carefully all the instructions and notes for this deliverable</p>
<p>. Start working on the requirements specified below</p>
<p>## Requirements</p>
<p>he following is the list of requirements for your deliverable:</p>
<p>. If you don’t have it already, add a **Shopping Cart **Icon to your header. You can create this icon as a separate component so you can add the logic to display a badge with the number of items that you have added to your cart. This icon will also serve as a link to navigate to the **Shopping Cart** Page after clicking on it.</p>
<p>. Modify the **Product Detail Page** according to the following requirements:</p>
<p> 2.1. Implement the Add to Cart functionality for the selected product.</p>
<p> 2.2. You should be able to add multiple items to your cart using the quantity selector. Please don’t forget to validate that you don’t exceed the stock units available for the selected product.</p>
<p> 2.3. After clicking on the **Add to Cart** button the items should be added to your cart and the badge on the “Shopping Cart Icon” in the header should be updated to display the current quantity of items in the cart.</p>
<p> 2.4. The **Add to Cart** button should be hidden or disabled when the `**stock**` units available for the selected product is zero. So you shouldn’t be able to add to cart a product that is not available in the stock.</p>
<p>. Create the **Shopping Cart Page** according to the following requirements:</p>
<p> 3.1. The route for this page should be `**/cart**`</p>
<p> 3.2. This page should contain a table to display the items added to the cart and you should build it considering the following:</p>
<p> 3.2.1. There should be a row in this table per item/product in the cart.</p>
<p> 3.2.2. Each row should show the main image of the product, its name, unit price, a quantity selector, subtotal (unit price x quantity) and a **Remove from cart** icon.</p>
<p> 3.2.3. At the bottom of the table there should be a label to display the **cart total** (sum of the subtotal’s column in the table) and a **Proceed to checkout** button that will serve as a link to navigate to the **Checkout** Page after clicking on it.</p>
<p> 3.2.4. You should be able to modify the quantity of items that you want using the quantity selector. Please don’t forget to validate that you don’t exceed the **stock** units available for the selected product.</p>
<p> 3.2.5. After updating the quantity the subtotal for the product and the cart total labels should be updated.</p>
<p>. Create the **Checkout Page** according to the following requirements:</p>
<p> 4.1. The route for this page should be `**/checkout**`</p>
<p> 4.2. This page should contain the following blocks:</p>
<p> 4.2.1. A **Form** to capture the customer information for their order considering the following:</p>
<p> 4.2.1.1. A text input to capture the name of the customer</p>
<p> 4.2.1.2. A text input to capture the email of the customer</p>
<p> 4.2.1.3. A text input to capture the post/zip code of the customer</p>
<p> 4.2.1.4. A textarea to capture the order notes</p>
<p> 4.2.2. An **order summary table** to display the items added to the cart and you should build it considering the following:</p>
<p> 4.2.2.1. There should be a row in this table per item/product in the cart.</p>
<p> 4.2.2.2. Each row should only show the name of the product, number of items added to cart and the subtotal (unit price x quantity).</p>
<p> 4.2.2.3. At the bottom of the table there should be a label to display the **cart total** (sum of the subtotal’s column) and two buttons, one for **Place order** and the other for **Go back to cart**</p>
<p> 4.2.3. You don’t have to implement the logic for the **Place order** button yet.</p>
<p> 4.2.4. After clicking on the **Go back to cart** button, you should be able to navigate to the **Shopping Cart** Page.</p>
<p>  **Notes**: </p>
<p> - You should implement functional components with hooks.</p>
<p> - Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don’t use any components library such as Bootstrap or Material UI.**</p>
<p> - We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!</p>
<p> - Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).</p>
<p> - Please make sure that no warnings or errors are logged in the browser console.</p>



           </div>
        </div>
    );
}
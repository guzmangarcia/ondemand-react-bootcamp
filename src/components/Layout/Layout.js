import './Layout.scss';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'



export default function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <div>{children}</div>
            <Footer />
            <div>
            <p> ### Requirements</p>

            <del>     <p>The following is the list of requirements for your deliverable: </p></del>
<del><p>1. Add a button with the text “View all products” below your Featured Products Grid on the Home Page.</p></del>
<del><p>2. Create a new component for your Product List that returns this React element for now: `<h1>This is the Product List Page</h1></p></del>
<del><p>3. Modify your App component to implement a conditional rendering logic to navigate through your pages. In this case, you will only need to be able to navigate from Home Page to Product List Page and from Product List Page to Home Page.</p></del>
<del><p>4. Add an event handler to your “View all products” button so you can navigate to your Product List Page when you click on it.</p></del>
<del><p>5. Test your conditional rendering logic to navigate to the Product List Page. After clicking on the “View all products” button, you should see the following message “This is the Product List Page” replacing the Home Page.</p></del>
<del><p>6. Add an event handler to your Ecommerce logo in the header so you can navigate to your Home Page when you click on it.</p></del>
<del><p>7. Test your conditional rendering logic to navigate to the Home Page. After clicking on the Ecommerce logo in the header, you should see your Home Page content, replacing the Product List Page.</p></del>
<del><p>8. Modify your Product List Page component to contain the following blocks:</p></del>
<p>- 8.1. A **Sidebar** (left or right side, is up to you), it should contain a list of categories from [this mock file](/mocks/en-us/product-categories.json). The elements in this list will work as filters for your products, so, you should render the name of each category and attach to it an empty handler for the onClick event.</p>
<p>- 8.2. A **Grid** of Products from [this mock file](/mocks/en-us/products.json). For each element on this grid, you should show at least the main image of the product, its name, category, and price.</p>
<p>9. Add an event handler to the categories in your sidebar, so when you click on each of them, the products in the grid are filtered. <b>The <span id="filtering-behavior">behavior</span> of this filters should be the following</b>:</p>
<p> 9.1. By default each category filter should be disabled.</p>
<p>- 9.2. When you click on the category filter for the first time, that filter will be enabled and applied to the product grid.</p>
<p>- 9.3. When the filter is active/enabled, you should apply some styling to the selected category so it s easier to distinguish between active and inactive states.</p>
<p>- 9.4. You can have multiple filters enabled at the same time, so when this happens, the products that will be shown in the grid should have at least one of the categories from the active filters.</p>
<p>- 9.5. To disable a filter, you will have to click on it and it should be removed from the active filters.</p>
<p>10. Add pagination controls to the bottom of your list. For now, you just need to create the UI for these elements, you don t need to implement the pagination logic on your grid yet.</p>
<p>
 **Notes**: </p>
<p> - You won t need to implement React Router library to navigate through your pages yet, you will only need to implement some conditional rendering logic to show the component for the page that you want to see.</p>
<p> - You should implement functional components with hooks</p>
<p> - Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don t use any components library such as Bootstrap or Material UI.**</p>
<p> - We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!</p>
<p> - Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).</p>
<p> - Please make sure that no warnings or errors are logged in the browser console.</p>

<p>### Evaluation Criteria</p>
<p></p>
<p>The following is the list of evaluation criteria for your deliverable:</p>
<p></p>
<p>- Navigation from Home Page to Product List Page works correctly: 15 points</p>
<p>- Navigation from Product List Page to Home Page works correctly: 15 points</p>
<p>- The Sidebar with the list of categories is rendered correctly using the data from [the mock file](/mocks/en-us/product-categories.json): 10 points</p>
<p>- The Products Grid is rendered correctly using the data from [the mock file](/mocks/en-us/products.json):(25 points</p>
<p>- Filtering behaviors are implemented correctly according to the requirements: 30 points</p>
<p>- Pagination controls are rendered correctly: 5 points</p>

<p>### Bonus</p>
<p>The bonus is a plus that helps us know you better and increments your final score. Consider the following: </p>
<p>- Emulate loading state for the Products Grid. You should show a loader component immediately after you navigate to the Product List Page and 2 seconds after that, you should remove that loader and show all the products from the mock file (20 points)</p>

            </div>

        </div>
    );
}
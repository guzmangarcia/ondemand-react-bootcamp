import React from 'react';
import Carousel from './Carousel';
import styles from './Content.module.scss'
import SellItem from './SellItem'


 

export default class Content extends React.Component
 {
    constructor(props) {
        super(props)
    
       const element = {
            id: 1,
            count: 10,
            src: 'https://images.prismic.io/wizeline-academy/d29a4958-97e1-4fe5-b1db-ee9be564a2dd_banner-2-2.jpeg?auto=compress,format&rect=85,0,1430,700&w=1440&h=705',
            alt: 'media',
            text: 'This is text'
        
        };
        const element2 = {
            id: 2,
            count: 10,
            src: 'https://images.prismic.io/wizeline-academy/d29a4958-97e1-4fe5-b1db-ee9be564a2dd_banner-2-2.jpeg?auto=compress,format&rect=85,0,1430,700&w=1440&h=705',
            alt: 'media',
            text: 'This is text'
        
        };
        
         const elements=[element,element2];

        this.state = { elements: elements }

      }


8


    render(){
    return (
        <div className={styles.textcontent} >
            
           <Carousel  index={0} elements={this.state.elements} />
        

            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <br/>
            <br/>
            <p>
                ## Deliverable 1

                - **Goal:** In this assignment, you will create the initial version of your Ecommerce Store. It should contain the following:
                - Home Page (prototype)
                - **Related topics**: React Fundamentals & CSS Styles in React

                ### Before you start

                Follow these steps before you begin:


                <ol>
                    <li>Fork
                        <a href={"https://github.com/wizelineacademy/ondemand-react-bootcamp"} > this repo </a> 
                        into your GitHub account.
                    </li>
                    <li>Make sure that your new repo is publicly accessible.</li>
                    <li>Create a new branch with the name <b>“feat/deliverable1”</b> derived from <b>main</b> on your forked repository.</li>
                    <li>Start working on the requirements specified below.</li>
                </ol>

                ### Requirements


            The following is the list of requirements for your deliverable:
            <ol>
                <li>
                    Create the <b>UI layout</b> for your app, it should include the following elements:
                    <ul>
                        <li>1.1. A <b>Header</b> containing your Ecommerce Store logo/name, a search input, and a shopping cart icon. For now, all the elements in the header should be disabled, you only need to create the corresponding UI elements without the functionality.</li>
                        <li>1.2. The <b>Content</b> view corresponding to the section that will be rendered (in this case, the Home Page)</li>
                        <li>1.3. A <b>Footer</b> containing the message “Ecommerce created during Wizeline’s Academy React Bootcamp”</li>
                    </ul>
                </li>
                <li>
                    Create the <b>Home Page</b> including the following blocks:
                    <ul>
                        <li>2.1. A <b>Slider</b> to display the featured banners from <a href="https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/mocks/en-us/featured-banners.json">this mock file</a></li>
                        <li>2.2. A <b>Carousel</b> or <b>Grid</b> of the product categories from <a href="https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/mocks/en-us/product-categories.json">this mock file</a></li>
                        <li>2.3. A <b>Grid</b> of <b>Featured Products</b> from <a href="https://github.com/wizelineacademy/ondemand-react-bootcamp/blob/main/mocks/en-us/featured-products.json">this mock file</a>. For each element on this grid, you should show at least the main image of the product, its name, category, and price.</li>
                    </ul>
                </li>
            </ol>

            ### Notes
            - Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. Please don’t use any UI library such as Bootstrap or Material UI, we want you to create all of your styles from scratch using the styling techniques learned.
            - Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphone, Tablet, Desktop).
            - Please make sure that no warnings or errors are logged in the browser console
        </p>

        </div >


    );}





}
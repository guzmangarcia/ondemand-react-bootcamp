

import { useEffect } from 'react';
import './SideBar.css'
import { useSearchParams } from "react-router-dom";

export default function SideBar({ menuListItems, selectedCategories, updateParentSelectedCategories }) {


    const [searchParams] = useSearchParams();

    useEffect(() => {

        const categorySelected = searchParams.get("category");
        if (categorySelected === undefined || categorySelected === null|| categorySelected === '') return;
        handleClick(categorySelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function handleClick(categoryId) {
        let newArray;
        if (selectedCategories.includes(categoryId)) {
            newArray = selectedCategories.filter((d) => d !== categoryId);
        }
        else {
            newArray = [...selectedCategories, categoryId];
        }
 
        updateParentSelectedCategories(newArray);
    }

    return (


        <div className="sidebar">
            {
                menuListItems.map((optionItem, index) => (
                    <a key={index}
                        className={selectedCategories.some(d => d === optionItem.categoryId) ? 'active' : ''}
                        href={'#' + encodeURIComponent(optionItem.categoryId)}
                        onClick={() => handleClick(optionItem.categoryId)} >
                        {optionItem.alt}
                    </a>))
            }

        </div >
    );




}
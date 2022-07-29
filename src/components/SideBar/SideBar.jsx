import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SideBar.module.scss';

export default function SideBar({
  menuListItems,
  selectedCategories,
  updateParentSelectedCategories,
}) {
  const [searchParams] = useSearchParams();

  function handleClick(categoryId) {
    let newArray;
    if (selectedCategories.includes(categoryId)) {
      newArray = selectedCategories.filter((d) => d !== categoryId);
    } else {
      newArray = [...selectedCategories, categoryId];
    }

    updateParentSelectedCategories(newArray);
  }

  useEffect(() => {
    const categorySelected = searchParams.get('category');
    if (categorySelected === undefined || categorySelected === null || categorySelected === '') return;
    handleClick(categorySelected);
  }, []);

  return (

    <div className={styles.sidebar}>
      {
        menuListItems.map((optionItem, index) => (
          <a
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={selectedCategories.some((d) => d === optionItem.categoryId) ? `${styles.active}` : ''}
            href={`#${encodeURIComponent(optionItem.categoryId)}`}
            onClick={() => handleClick(optionItem.categoryId)}
          >
            {optionItem.alt}
          </a>
        ))
      }

    </div>
  );
}
SideBar.propTypes = {
  menuListItems: PropTypes.string.isRequired,
  selectedCategories: PropTypes.string.isRequired,
  updateParentSelectedCategories: PropTypes.string.isRequired,
};

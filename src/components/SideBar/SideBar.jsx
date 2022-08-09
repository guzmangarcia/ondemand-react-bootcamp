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

  if (menuListItems === undefined) return (<div>Loading...</div>);
  if (menuListItems.length === 0) return (<div>No elements found</div>);

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
  menuListItems: PropTypes.arrayOf(PropTypes.shape(
    {
      categoryId: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    },
  )),
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  updateParentSelectedCategories: PropTypes.func,
};
SideBar.defaultProps = {
  menuListItems: undefined,
  selectedCategories: [],
  updateParentSelectedCategories: () => {},
};

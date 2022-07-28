import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

export function SearchEngine() {
  const navigate = useNavigate();

  return (

    <input
      className={styles.search}
      placeholder="Find your product..."
      onChange={(e) => {
        if (e.target.value === '') {
          navigate('/home');
        } else {
          navigate(`/search?q=${e.target.value}`);
        }
      }}
    />
  );
}

import useFetch from '../hooks/useFetch';
import apiRoutes from '../api/apiRoutes';
import {useLocation, useNavigate, useParams } from 'react-router';
import NotFoundPage from './NotFoundPage';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import styles from './ProductPage.module.css';
  const validCategories = ['televisions', 'notebooks', 'smartphones', 'monitors'];

const ProductPage = () => {
    const {id, category} = useParams();

    const {state} = useLocation();
    const isCategoryValid = validCategories.includes(category);
    const {data: product, isLoading, error} = useFetch(apiRoutes.getProductById(id), {skip: !isCategoryValid});
    const navigate = useNavigate();
    if(!isCategoryValid) return <NotFoundPage/>
  return (
    <section className={styles.productSection}>
      <button onClick={() => navigate(state?.from)} className={styles.backButton}>Назад</button>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {product && (
        
              <div className={styles.productDetails}>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productPrice}>{product.price} грн</p>
                </div>
              </div>
          
          )}
    </section>
    
  )
}

export default ProductPage

import useFetch from '../hooks/useFetch';
import apiRoutes from '../api/apiRoutes';
import {useLocation, useNavigate, useParams } from 'react-router';
import NotFoundPage from './NotFoundPage';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
  const validCategories = ['televisions', 'notebooks', 'smartphones', 'monitors'];

const ProductPage = () => {
    const {id, category} = useParams();

    const {state} = useLocation();
    const isCategoryValid = validCategories.includes(category);
    const {data: product, isLoading, error} = useFetch(apiRoutes.getProductById(id), {skip: !isCategoryValid});
    const navigate = useNavigate();
    if(!isCategoryValid) return <NotFoundPage/>
  return (
    <section>
      <button onClick={() => navigate(state?.from)}>Назад</button>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {product && (
        
              <div>
                <h3>{product.name}</h3>
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.price}</p>
                </div>
          
          )}
    </section>
    
  )
}

export default ProductPage
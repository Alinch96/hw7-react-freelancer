import { Link, useLocation, useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import apiRoutes from "../api/apiRoutes";
import { useMemo } from "react";
import Loader from "../components/Loader/Loader";
import styles from './ProductList.module.css';
import clsx from "clsx";

const ProductsList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const { data: products, error, isLoading } = useFetch(apiRoutes.productsList);
  const filteredProducts = useMemo(
    () => products?.filter((product) => product.category === category),
    [products, category]
  );
  const navigate = useNavigate();
  return (
    <section className={styles.productsSection}>
      {isLoading && <Loader />}
      {error && <Error />}
      {filteredProducts && (
        <ul className={styles.productsList}>
          {filteredProducts.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <Link to={product.id} state={{ from: location.pathname, replace: true }} className={styles.productLink}>
              <div className={styles.productCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <h3 className={clsx(styles.productName, styles.multilineTruncate)}>{product.name}</h3>
                </div></Link>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/")} className={styles.backButton}>На головну</button>
    </section>
  );
};

export default ProductsList;

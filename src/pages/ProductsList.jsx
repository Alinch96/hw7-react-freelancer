import { Link, useLocation, useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";
import apiRoutes from "../api/apiRoutes";
import { useMemo } from "react";
import Loader from "../components/Loader/Loader";

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
    <section>
      {isLoading && <Loader />}
      {error && <Error />}
      {filteredProducts && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link to={product.id} state={{ from: location.pathname, replace: true }}>
              <div>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                </div></Link>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/")}>На головну</button>
    </section>
  );
};

export default ProductsList;

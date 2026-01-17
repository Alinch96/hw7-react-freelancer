const backendUrl = 'https://simple-backend-hw7.onrender.com/api';

export default {
  productsList: `${backendUrl}/products`,
  getProductById: (id) => `${backendUrl}/products/${id}`,
}

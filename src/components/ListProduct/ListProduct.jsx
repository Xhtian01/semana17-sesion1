export const ListProduct = ({ products, deleteProduct }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} <button onClick={() => deleteProduct(product.id)}>X</button>
          <button>Editar</button>
        </li>
      ))}
    </ul>
  );
};

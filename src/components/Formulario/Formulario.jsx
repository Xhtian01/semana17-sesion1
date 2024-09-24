import { CrearProduct } from '../CrearProduct/CrearProduct';

export const Formulario = ({ createProduct, setCompany, setName, setQuantity }) => {
  return (
    <form onSubmit={createProduct}>
      <div>
        <label htmlFor="">Nombre Producto</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
      </div>
      <br />
      <div>
        <label htmlFor="">Nombre Compañia</label>
        <input
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          type="text"
        />
      </div>
      <br />
      <div>
        <label htmlFor="">Cantidad Producto</label>
        <input
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          type="text"
        />
      </div>
      <br />
      <CrearProduct />
    </form>
  );
};

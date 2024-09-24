/*import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Message } from './components/Message';*/

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Loading } from './components/Loading/Loading';
import { Error } from './components/Error/Error';
import { CrearProduct } from './components/CrearProduct/CrearProduct';
import { ListProduct } from './components/ListProduct/ListProduct';
import { Formulario } from './components/Formulario/Formulario';
/*import { Counter } from './components/Counter/Counter';*/

/*import { PersonList } from './components/PersonList';
import { arrayPersons } from './store';*/

export const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  /*console.log(arrayPersons);*/

  /*const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount(count + 1);
  };*/

  const readProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:3000/products');
      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (e) => {
    e.preventDefault();
    const userData = { company, name, quantity };
    setLoading(true);

    try {
      const { data } = await axios.post('http://localhost:3000/products', userData);

      setProducts([...products, data]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
    console.log(data);
  };

  const deleteProduct = async (idToDelete) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:3000/products/${idToDelete}`);

      setProducts(products.filter((product) => product.id !== idToDelete));
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }

    /* console.log(data);*/
  };

  useEffect(() => {
    /*  console.log('Cuando el componente se carga');*/
    readProduct();
  }, []);

  console.log(products);

  return (
    <section>
      <h1>App Component</h1>
      {/*Formulario*/}
      <Formulario createProduct={createProduct} setCompany={setCompany} setName={setName} setQuantity={setQuantity} />

      {/*Listado*/}
      <Loading loading={loading} />

      <Error error={error} />

      <ListProduct products={products} deleteProduct={deleteProduct} />
    </section>
  );
};

/*Sesion 1*/
{
  /*<h1>Counter App: {count}</h1>*/
}
{
  /*<ul>
        {}

        {arrayPersons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>*/
}
{
  /*<PersonList arrayPersons={arrayPersons} />*/
}
{
  /*<button onClick={handleCLick}>Incrementar</button>*/
}
{
  /*<Counter />*/
}

/*----*/

/*{arrayPerson.map((person) => {
          return <li>{person.name}</li>;
        })}*/

// Crear boton decrementar y boton resetear
// Crear componente <Counter /> y pasar toda la logica alli y llamarlo desde APP

//Componentizar FORMULARIO
//Componentizar LISTADO DE PRODUCTOS Y CREAR PRODUCTOS
// INVESTIGAR EL UPDATE

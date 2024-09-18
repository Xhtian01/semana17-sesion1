/*import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Message } from './components/Message';*/

/*import { useState } from 'react';*/
import { Counter } from './components/Counter/Counter';

/*import { PersonList } from './components/PersonList';
import { arrayPersons } from './store';*/

export const App = () => {
  /*console.log(arrayPersons);*/

  /*const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount(count + 1);
  };*/

  return (
    <section>
      {/*<h1>Counter App: {count}</h1>*/}
      {/*<ul>
        {}

        {arrayPersons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>*/}
      {/*<PersonList arrayPersons={arrayPersons} />*/}
      {/*<button onClick={handleCLick}>Incrementar</button>*/}
      <Counter />
    </section>
  );
};

/*{arrayPerson.map((person) => {
          return <li>{person.name}</li>;
        })}*/

// Crear boton decrementar y boton resetear
// Crear componente <Counter /> y pasar toda la logica alli y llamarlo desde APP

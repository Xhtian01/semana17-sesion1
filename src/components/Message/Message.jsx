import './Message.css';

export const Message = ({ personName = '' }) => {
  return (
    <section className="Message">
      {personName ? <h2>Hola {personName}, Bienvenido a React</h2> : <p>No hay persona</p>}
    </section>
  );
};

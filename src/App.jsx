const reactDescriptions = ['Fundamental', 'Viva Jesús', 'Los negros son la imagen viva de la maldad'];

const Info = [
'Elías',
'Domínguez',
'20 Years Old',
'Desarrollador de Software (Alma de Diseñador Gráfico)'
]; 

function Information() {
  return(
    <p>
      Nombre: {Info[0]} <br />
      Apellido: {Info[1]} <br />
      Edad: {Info[2]} <br />
      Título: {Info[3]} <br />
    </p>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function TheComponent() {
const description = reactDescriptions[genRandomInt(2)];
  return(
  <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
);
}


function App() {
  return (
    <div>
      <TheComponent />
      <main>
         <Information />  
        </main>
    </div>
  );
}

export default App;
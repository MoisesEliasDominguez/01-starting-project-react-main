import Header from './components/Header/Header.jsx';
import componentImg from './assets/components.png/';
import { CORE_CONCEPTS } from './data';
import CoreConcepts from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {

  function handleClick(selectedButton){
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get Started!</h2>
        
        
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
            image={componentImg}
            title='Components'
            description='The core UI building block - compose the user interface by combining multiple components'
            />
            <CoreConcepts 
            {... CORE_CONCEPTS[1]}
            //image={CORE_CONCEPTS[1].image}
            //title={CORE_CONCEPTS[1].title}
            //description={CORE_CONCEPTS[1].description}
            />
            <CoreConcepts 
            {... CORE_CONCEPTS[2]}
            //image={CORE_CONCEPTS[2].image}
            //title={CORE_CONCEPTS[2].title}
            //description={CORE_CONCEPTS[2].description}
            />
            <CoreConcepts 
            {... CORE_CONCEPTS[3]}
            //image={CORE_CONCEPTS[3].image}
            //title={CORE_CONCEPTS[3].title}
            //description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
  
        <section id="examples">
          <h2>Los ejemplos</h2>
          <menu>
            <TabButton handleClick = {() => {handleClick('Components')}}>Components</TabButton>
            <TabButton handleClick = {() => {handleClick('Jsx')}}>JSX</TabButton>
            <TabButton handleClick = {() => {handleClick('Props')}}>Props</TabButton>
            <TabButton handleClick = {() => {handleClick('State')}}>State</TabButton>
          </menu>
        </section>
      

      </main>
    </div>
  );
}

export default App;
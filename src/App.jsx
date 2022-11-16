import './App.css';
import Counter from './components/Counter';
import From from './components/form/From';
import FormHook from './components/reactHookForm/formHook';
import Toglle from './components/Toggle';

function App() {
  return (
    <div >
      {/* <Counter/>
      <Toglle/>
      <From/> */}

      <FormHook/>
    </div>
  );
}

export default App;

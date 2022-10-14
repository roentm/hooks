import './App.css';
import AppExchange from './comps/appExchange';
import AppInput from './comps/appInput';
import Counter from './comps/counter';

function App() {
  return (
    <div className="container">
      <Counter />
      <AppInput/>
      <AppExchange />
    </div>
  );
}

export default App;

import './App.scss';
import Control from './components/Control';
import { ValueProvider } from './contexts/ValueContext';
import { RegexProvider } from './contexts/RegexContext';

const App = () => {

  return (
    <main className="main">
      <h4 className="pg-text">password generator</h4>
      <ValueProvider>
        <RegexProvider>
          <Control />
        </RegexProvider>
      </ValueProvider>
    </main>
  )
}

export default App

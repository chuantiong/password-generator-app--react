import './App.scss';
import Control from './components/Control';
import { ValueProvider } from './contexts/ValueContext';
import { RegexProvider } from './contexts/RegexContext';
import Attribution from './components/Attribution';

const App = () => {

  return (
    <>
      <main className="main">
        <h4 className="pg-text">password generator</h4>
        <ValueProvider>
          <RegexProvider>
            <Control />
          </RegexProvider>
        </ValueProvider>
      </main>
      <Attribution />
    </>
  )
}

export default App

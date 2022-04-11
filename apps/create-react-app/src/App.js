import { TestButton } from "@test/ui";
import './App.css';

function App() {
    console.log(TestButton)

  return (
    <div className="App">
      <header className="App-header">
          <span>create-react-app</span>
          <TestButton>TestButton in create-react-app App</TestButton>
      </header>
    </div>
  );
}

export default App;

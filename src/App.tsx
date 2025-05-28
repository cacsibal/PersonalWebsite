import Message from "./components/Message";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Message />
      </main>
    </div>
  );
}

export default App;
import './App.css';
import Header from './components/Header';
import Birthday from './components/Birthday';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header title="Welcome to Birthday Reminder"/>
      <Birthday />

    </div>
  );
}

export default App;

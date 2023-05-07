import logo from './logo.svg';
import './App.css';
import  {Part1, BackgroundColor, TodoApp, User}  from './components/Part1'
import Part1H2 from './components/Part1-h2'
import Part1P from './components/Part1-p'
import Tweet from './components/tweet/tweet'
import Para from './components/Person/para';

function App() {
  return (
    <div className="App">
      <Part1 />
      <BackgroundColor />
      <TodoApp />
      <User />
    </div>
  );
}

export default App;

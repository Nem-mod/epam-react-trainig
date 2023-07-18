import logo from './common/resources/img.png';
import './App.css';
import {Community} from "./common/components/Community/Community";
import {JoinProgram} from "./common/components/JoinProgram/JoinProgram";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Community/>
        </div>
        <JoinProgram/>
    </div>
  );
}

export default App;

import AppChild from "./AppChild";
import SubmittedForm from './Components/SubmittedForm'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes> 
          <Route exact path ="/" element={<AppChild />}></Route>
          <Route path="/submittedform" element={<SubmittedForm />} />
        </Routes>
          
    </Router>
    </>
  );
}

export default App;

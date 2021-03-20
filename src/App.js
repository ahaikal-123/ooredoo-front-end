import Header from './components/header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApplicantsList from './components/applicants/applicantsList';
import ApplicantsDetails from './components/applicants/applicantDetails/applicantsDetails';
import PostApplicants from './components/applicants/postApplicants/postApplicants';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route component={ApplicantsList} path="/" exact/>
          <Route component={ApplicantsDetails} path="/apllicant/:id" exact/>
          <Route component={PostApplicants} path="/add" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

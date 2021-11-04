import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from "./pages/Start";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

export default function App() {
  return (
    <div>
        <Router>
            <Route exact path="/start" component={Start}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/mypage" component={MyPage}/>
        </Router>
    </div>
  );
}


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from "./pages/Start";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Comment from "./pages/Comment";
import Post from "./components/post/Post"
import Community from './pages/Community';

const mainStyle = {
    margin: '0 auto',
    width: '420px',
    height: '820px',
    boxShadow: '0 2px 4px rgb(0 0 0 / 20%)',
}
export default function App() {
  return (
    <div style={mainStyle}>
        <Router>
            <Route exact path="/start" component={Start}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/mypage" component={MyPage}/>
            <Route exact path="/comment" component={Comment}/>
            <Route exact path="/post" component={Post}/>
            <Route exact path="/community" component={Community}/>
        </Router>
    </div>
  );
}


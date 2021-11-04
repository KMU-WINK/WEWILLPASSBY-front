import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Comment from "./pages/Comment";
import Testing from "./components/common/Post"

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
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/mypage" component={MyPage}/>
            <Route exact path="/comment" component={Comment}/>
            <Route exact path="/testing" component={Testing}/>
        </Router>
    </div>
  );
}


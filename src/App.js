import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Main from './pages/Main';
import './scss/style.scss';
import store from './store';
const App = () => {
    return (
        <Provider store={store}>
            <Router exact path="/">
                <Switch>
                    <Main/>
                </Switch>   
            </Router>
        </Provider>
    );
};

export default App;
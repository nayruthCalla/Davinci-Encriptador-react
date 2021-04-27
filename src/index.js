import ReactDOM from 'react-dom';
import {App} from './components/App';
import { HashRouter} from 'react-router-dom';
import '../src/css/index.css'

ReactDOM.render(
<HashRouter>
    <App/>
</HashRouter> ,
document.getElementById('root'));


import ReactDOM from 'react-dom';
import GuestList from './example.state/GuestList';

const App = () => {
    return (
        <div>
            <GuestList />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
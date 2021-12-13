import './App.css';
import {RecoilRoot} from 'recoil';
import TodoListContainer from "./Components/TodoList/TodoListContainer";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoInfoContainer from "./Components/TodoInfo/TodoInfoContainer";

function App() {
    return (
        <RecoilRoot>
            <div className="container">
                <div className='app-header'>React app with Recoil</div>
                <div className='app-subheader'>
                    <TodoInfoContainer />
                    <TodoForm />
                </div>
                <TodoListContainer />
            </div>
        </RecoilRoot>
    );
}

export default App;

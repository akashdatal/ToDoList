import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToDoHome } from './components/todohome';
import { ToDoLogin } from './components/todologin';
import { ToDoRegister } from './components/todoregister';
import { ToDoInvalid } from './components/todoinvalid';
import { ToDoDashBoard } from './components/todo-dashboard';
import { ToDoAddTask } from './components/add-task';
import { ToDoRemoveTask } from './components/todoremove-task';
import { ToDoEditTask } from './components/todo-edit-task';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <section className='mt-4'>
        <div>
          <Routes>
            <Route path='/' element={<ToDoHome/>}></Route>
            <Route path='login' element={<ToDoLogin/>}></Route>
            <Route path='register' element={<ToDoRegister/>}></Route>
            <Route path='invalid' element={<ToDoInvalid/>}/>
            <Route path='dashboard' element={<ToDoDashBoard/>}/>
            <Route path='add-task' element={<ToDoAddTask/>}/>
            <Route path='delete-task/:id' element={<ToDoRemoveTask/>}/>
            <Route path='edit-task/:id' element={<ToDoEditTask/>}/>
         </Routes>
        </div>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

// 글로벌 스타일을 추가하고 싶을 때
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;

import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {

  const array = [1, 2, 3].map(num => {
    if (num % 2) return num * 2;
    return num;
  });

  function getLast(array: any) { 
    return array[array.length - 1]
  }

  console.log(getLast(array));

  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;

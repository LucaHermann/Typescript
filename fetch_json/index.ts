import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface IFetchTodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as IFetchTodo;

  const id: number = todo.id;
  const title: string = todo.title;
  const completed: boolean = todo.completed;

  logTodo(id, title, completed);
}).catch(err => console.log('err ---->', err));

const logTodo = (id: number , title: string, completed: boolean) => {
  console.log(`
    The id of this todo list item is: ${id},
    the title is: ${title}, 
    completed status: ${completed}.
  `);
}

// Json

const todos = [
  {
    id: 1,
    title: 'Learn React',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Build a website with GatsbyJS and Netlify CMS',
    isCompleted: true
  },
  {
    id: 3,
    title: "Don't forget to eat",
    isCompleted: false
  }
];

const todosJson = JSON.stringify(todos);
const todoList = JSON.parse(todosJson);

console.log(todosJson)
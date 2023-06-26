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

const titleOfLastTodo = todos[2].title

console.log(titleOfLastTodo);
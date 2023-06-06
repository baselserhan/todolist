import React, {Component} from "react";
import './App.css';
import AddItem from './components/AddItem/AddItem';
import TodoItems from './components/TodoItems/TodoItems';

class App extends Component {
  state = {
    items: [
      {id: 1, name: 'Mohammed', age: 25},
      {id: 2, name: 'Yasser', age: 26},
      {id: 3, name: 'Fathi', age: 27},
    ]
  }

  deleteItem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i, 1);
    // this.setState({
    //   items
    // });
    let items = this.state.items.filter(item => item.id !== id);
    this.setState({
      items
    });
  }

  addItem = (item) => {
    // item.id = Math.floor(Math.random() * 100) + 1;
    item.id = this.state.items.length + 1; 
    let items = this.state.items;
    items.push(item);
    this.setState({
      items
    });
  }

  render() {
  return (
    <div className="App container">
      <h1 className="text-center">Todo List</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
  );
  }
}

export default App;

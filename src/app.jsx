import React, { Component } from 'react';
import './app.css';
import Navi from './components/navi';
import Habits from './components/habits';

class App extends Component {

  state = {
    navi : {
      title : 'Habit Tracker',
      count : 0
    },
    habits : [
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'Runnig', count: 0},
        { id: 3, name: 'Coding', count: 0}
    ],
  }

  handleIncrement = (habit) => {
    const navi = this.state.navi;

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id){
          navi.count++;
          return {...habit, count: habit.count + 1};
      }
      return item;
    });

    this.setState({habits});
};

handleDecrement = (habit) => {

    const navi = this.state.navi;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id){
        if(habit.count > 0){
          navi.count--;
        }
          return {...habit, count: habit.count -1 > 0 ? habit.count - 1 : 0};
      }
      return item;
    });

    this.setState({habits});
};

handleDelete = (habit) => {

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
};

handleAdd = (name) =>{

  const habits = [...this.state.habits, {id: Date.now(), name, count : 0 }];
  this.setState({habits});
};


handleReset = () =>{
  const habits = this.state.habits.map(habit => {
    if (habit !== 0 ){
      return {...habit, count : 0};
    }
    return habit;
  });

  this.state.navi.count = 0;
  this.setState({habits})
};

  render() {
      return (
        <>
          <Navi navi={this.state.navi}/>
          <Habits navi={this.state.navi} habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          />;
        </>
      );
  }
}

export default App;

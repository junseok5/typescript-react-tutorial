import * as React from 'react'
import Profile from './components/Profile'
import CounterContainer from './containers/CounterContainer'
import TodoListContainer from './containers/TodoListContainer'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile name="준석" job="미친놈" />
        <CounterContainer />
        <TodoListContainer />
      </div>
    )
  }
}

export default App

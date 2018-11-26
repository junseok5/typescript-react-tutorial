import * as React from 'react'
import Profile from './components/Profile'
import Counter from './components/Counter'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile name="준석" job="미친놈" />
        <Counter counter={1} />
      </div>
    )
  }
}

export default App

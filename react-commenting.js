// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This is the base component state. This object is used to store dynamic data for a React App. Any data that will be changing as user input is received should be stored here. 
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. This is a method, aka a function that is associated with the component. This particular method will update the state property of "userInput" to the user input. 
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. This line destructures userInput so that it may be easily accessed while writing the JSX in the return. Destructuring is helpful if you want clean, legible code. 
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. This is defining an input field that receives texts and passes it as an argument to our function above, titled robot.*/}
          onChange={ this.robot }
          {/* 5. This is assigning the userInput to a variable that can be accessed and modified by other parts of the code.*/}
          value={ userInput }
        />

        <div>
          {/* 6. This line is calling a component module so that it renders on our page.*/}
          <GoodRobot
            {/* 7. The following line is defining a variable within our base file for use within our child component. It's essentially "importing" this variable into the component.*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Below is the div container that wraps everything we are receiving from our Good Robot component.
      <div>
        <h3>Good Robot</h3>
        {/* 9. This is the actual h4 text that will be displayed on the page. It concatenates the strings and the value of our state property userInput into a nice, coherent sentence.*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.
export default GoodRobot

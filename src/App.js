import './App.css'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Shop></Shop>

      <div >
        <div className='questions'>
          <h4>How React works?</h4>
          <p>React is a JavaScript library developed by Facebook. React makes building websites easy and faster. One of the best features of React is its components structure. With React you can design specific components for a specific part of the website. So when a user interacts with the UI it will only update that specific part. Which is better for performance as it doesn't need to reload all content. React also makes the coding more manageable and organized. With the help of React hooks, you can apply JS code easily. Right now it's the most popular JS library, So as a front-end developer learning React can be very useful.</p>
        </div>
        <div className='questions'>
          <h4>How useState works?
          </h4>
          <p>useState is a React hook that declares a state variable similar to this.that in a class. We use a [] on the left and two properties inside [] and useState on the right side or = to declare a useState hook. The first property is the current state and the second one is a function to update that state.  It can keep a number or a string. So when a user interacts or the server changes the state value it will call the state function and update the current state. We can use as many useState hooks as necessary. It can only update the value inside that component where it's declared. </p>
        </div>
      </div>
    </div>
  );
}

export default App;

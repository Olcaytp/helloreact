
import { useEffect, useState } from 'react'

function App() {
    const [name, setName] = useState('Ali')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect çalıştı')
    }, [name])

  return (
    <div>
      <h1>
        Hello {name} <br/><br/>
        <button onClick={() => setName("Jane")}>Change Name </button> <br/><br/>

        Count: {count} <br/><br/>
        <button onClick={() => setCount(count + 1)}>Increase Count </button> <br/><br/>
      </h1>
    </div>
  )
}

export default App


























//// -----------------------------------------------------------Components + Props + State 
////import logo from './logo.svg';
//import './App.css';
//import Header from './components/Header';
//import User from './components/User';
//import State from './components/State';
//import Counter from './components/Counter';
//import InputExample from './components/InputExample';

//const name = 'Ali';
//const surname = 'Veli';
//const isLoggedIn = true;
//const friends = [
//    {
//        name: 'Mehmet',
//        surname: 'Sönmez',
//        id: 1,
//    },
//    {
//        name: 'Ahmet',
//        surname: 'Sönmez',
//        id: 2,
//    },
//    {
//        name: 'Ali',
//        surname: 'Sönmez',
//        id: 3,
//    },
//]

//function App() {
//    return(
//        <div>
//            <State />
//            <Counter />
//            <br />
//            <br />
//            <InputExample />

//            {/*<h1>My First React App</h1>
//            <Header> This is Header Component! </Header>*/}
//            {/*<Header />
//            <Header>
//                <h1> This is Header Component! </h1>
//                <p>
//                    This is a paragraph in the Header Component!
//                </p>
//            </Header>*/}
//            {/*<p>
//                lorem 
//            </p>
//            <label htmlFor="myinput">
//                Name: 
//                <input type="text" name="" id=""/>
//            </label>
//            <p>
//                {`Hello! My name is  ${name} ${surname} ----> `} {!isLoggedIn ? 'You are logged in!' : 'You are not logged in!'} 
//                <br />
//                <br />
//                {
//                    isLoggedIn
//                    ? "You are logged in!"
//                    : "You are not logged in!" 
//                }
//            </p>*/}
            
//            {/*<User 
//            surname = {"Sönmez"} 
//            isLoggedIn = {true} 
//            age = {25} 
//            friends = {friends}
//            adress = {{
//                title: "Istanbul",
//                zip: 34000,
//            }}
//            />*/}
//        </div>
//    )
//}

//export default App;

////--------------------------------------------------------------------------------------------------------    -                   

///**
// * //function App() {
////  return (
////    <div className="App">
////      <header className="App-header">
////        <img src={logo} className="App-logo" alt="logo" />
////        <p>
////          Edit <code>src/App.js</code> and save to reload.
////        </p>
////        <a
////          className="App-link"
////          href="https://reactjs.org"
////          target="_blank"
////          rel="noopener noreferrer"
////        >
////          Learn React
////        </a>
////      </header>
////    </div>
////  );
////}

////export default App;
// */

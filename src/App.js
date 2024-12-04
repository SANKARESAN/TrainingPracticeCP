//  import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import EventComp from './components/EventComp';
import FuncComp from './components/FuncComp';
import MyStateComp from './components/MyStateComp';
import ParentComp from './components/ParentComp';
import SankareshFunc from './Task/SankareshComp';
import MyPureComp from './components/MyPureComp';
import MyImageComp from './components/MyImagesComp';
import UserComp from "./components/UserComp";
import ErrorBoundryComp from './components/ErrorBoundry';
import VirtualDOM from './components/VirtualDOM';

function App() {
  return (
    <div className="App">
    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
   
      <h1>Welcome you all in react sessions</h1>
       {/*
      <SankareshFunc/>
      <ClassComp/>

      <FuncComp fname ="sankaresh S" post = "Python developer"></FuncComp>     
      <ClassComp fname = "raju"  post = "Java developer"/>
      
      <SankareshFunc fname = "sushma" lname = "prince" salary = '20000' gender = "Female" address = "chennai"/>

      <EventComp/>
      <MyStateComp/>
      <ConditionalRenComp/>
    */}
      {/* <CssComp/> */}
      {/* <ParentComp gender="Male" contact = {40923434}/>

      <HoverCounterComp/>
      <ClickCounterComp/>
       */}
      {/* <MyImageComp/> */}
      <UserComp user="ben"/>
      <ErrorBoundryComp>
        <UserComp user="sivaji"/>
      </ErrorBoundryComp>
      <ErrorBoundryComp>
        <UserComp user="arya"/>
      </ErrorBoundryComp>
      <ErrorBoundryComp>
        <UserComp user="surya"/>
      </ErrorBoundryComp>
      <VirtualDOM></VirtualDOM>
    </div>
  );
}

export default App;

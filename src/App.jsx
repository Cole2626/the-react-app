import Header from './header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from './Clock.jsx';

function App() {
  return(
    <>
      <Header/>
      <h1>The Best Website in the History of Websites</h1>
      <Footer/>
      <Clock/>
      <MyDemo/>
      <Stuff name="George Constanza" title="Assistant to the Traveling Secretary"/>
      <Stuff name="Jeff Bezos" title="The CEO"/>
      <Stuff name="Bill Nye" title="The Science Guy"/>
      <Stuff name="Steve Prefontaine" title="The Pacepusher"/>
    </>
  );
}

export default App

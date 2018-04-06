import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import GettingAround from './components/GettingAround';
import News from './components/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import * as routes from './routes';
import './index.css';

const PageFade = (props) => 
  (<CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={{
      enter: 2000,
      exit: 500,
    }}
    mountOnEnter={true}
    unmountOnExit={true}
  />);


const Layout = ({ children }) => (
  <section>

  	<Navbar />

    {children}
    
  </section>
);


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const locationKey = this.props.location.pathname;

  return (
       <Layout>
         <TransitionGroup>
           <PageFade key={locationKey}>

             <section className="fix-container">

               <Switch location={this.props.location}>
                 <Route
                   exact path={routes.LANDING}
                   component={() => <Landing />}
                 />

                 <Route
                   exact path={routes.ABOUT}
                   component={() => <About />}
                 />

                 <Route
                   exact path={routes.CONTACT}
                   component={() => <Contact />}
                 />

                 <Route
                   exact path={routes.NEWS}
                   component={() => <News />}
                 />

                 <Route
                   exact path={routes.GETTINGAROUND}
                   component={() => <GettingAround />}
                 />

                </Switch>

               <Footer />

             </section>
           </PageFade>
         </TransitionGroup>
       </Layout>
     )
  }
}

export default App;

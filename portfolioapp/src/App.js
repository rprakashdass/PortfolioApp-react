import './App.css';
import LinksCard from './links.js';
import Header,{TopNav} from './header.js';
import Display from './socialmedia';
import Gallery from './gallery.js';
import Footer,{FooterMessage} from './footer.js';

function App() {
  return (
    <div className="App">
      <Header>
        <TopNav/>
      </Header>
      <Body>
        <About/>
        <hr className='mt-5 mb-5'/>
        <LinksCard/>
        <hr className='mt-5 mb-5'/>
        <Display/>
        <hr className='mt-5 mb-5'/>
        <Gallery/>
      </Body>
      <Footer>
        <FooterMessage/>
      </Footer>
    </div>
  );
}

function Body({children}){
  return (
    <section style={{"marginBottom" : "25px",margin : "150px"}}>
      {children}
      <hr></hr>
    </section>
  );
}

function About(){
  return (
    <section className=''>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card p-4 bg-dark'>
            <div className='card-body'>
              <p className='card-text'>
              This me Prakash Dass R. Iam Gonna Share my Knowledge and expirience Here From on now!!
              </p>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='card p-4 bg-dark'>
          <div className='card-body'>
              <p className='card-text'>
              This me Prakash Dass R. Iam Gonna Share my Knowledge and expirience Here From on now!!
              </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default App;
import {useState} from 'react';
import './App.css';

export default function Footer({children}) {
    return (
        <footer className=''>
            <section>
                {children}
                <p className=''>@ Copyright Owned</p>
            </section>
        </footer>
    );
}

export function FooterMessage(){
    const [ name, setName ] = useState('');

    function handleClick(e){
      setName(e.target.value);
    }

    function eraseContent(){
        setName('');
    }

    return (
      <>
      <form className='text-black' onSubmit={e=>{alert('Hi ' + name);  e.preventDefault() ; }}>
        <div style={{ display: 'inline-block' ,marginBottom:'35px'}}>
          <h2 style={{ display: '', marginRight: '30px' }}>Add Your Greetings!</h2>
          <input name={name} onChange={e=>{ handleClick(e)}} style={{ color: 'black' , background:'GREY'}} />
          <button type='submit' >Send</button>
          <button type='reset' onClick={eraseContent}>Erase</button>
          <p style={{ display: 'block', marginTop:'30PX' ,}}>{name}</p>
        </div>
      </form>
      </>
    )
}
function Header({children}){
    return (
      <div className='header-container'>
        {/* Children will occor without video */}
        <video className='banner-video' src='images/bannerVid.mp4' alt="VideoBanner" autoPlay Loop>{children}</video>
      </div>
    );
}

function Button({onClick}){
  return (
    <button onClick={onClick} style={{
      padding : "10px",
      color : "black",
      "z-index" : 9999,
    }}>Click Me!</button>
  );
}

export function TopNav(){
    return (
        <div className="container-fluid banner">
            <ul className="navbar nav">
                <li className="nav nav-item p-3">Front </li>
                <li className="nav nav-item p-3 active">Home</li>
                <li className="nav nav-item p-3">Back </li>
                <li className="nav nav-item p-3"><Button onClick = {() => alert("hi")}/> </li>
            </ul>
        </div>
    );
  }

export default Header;
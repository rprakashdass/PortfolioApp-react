const NeededLinks = [
    {
        "id" : 0,
        "title" : "Javascript" ,
        "link" : "https://javascript.info/",
    },
    {
        "id" : 2,
        "title" : "React Js",
        "link" : "https://react.dev/",
    },
    {
        "id" : 3,
        "title" : "Portfolio Template",
        "link" : "https://dribbble.com/shots/21707793-Personal-Portfolio-Web-Landing-Page-Design",
    },
    {
    	"id" : 4,
    	"title" : "Design System",
    	"link" : "https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969"
    },
    {
    	"id" : 5,
    	"title" : "HTML: A good basis for accessibility",
    	"link" : "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
    }
]

function LinksCard(){
    return (
        <div className="card bg-dark">
        {
          NeededLinks.map(link =>
            <ul key={link.title} className="list-group list-group-flush">
              <ShowLink props={link}/>
            </ul>
          )
        }
        </div>
    );
  }

function ShowLink({props}){
    return (
      <li className="list-group-item bg-dark">
        <p >{props.title}</p>
        <a href={props.link}>{props.link}</a>
      </li>
    );
  }

export default LinksCard;

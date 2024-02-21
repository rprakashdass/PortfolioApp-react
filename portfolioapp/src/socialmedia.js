const socialmedia = [
        {
            'title' : 'Github',
            'link' : 'https://github.com/',
            'description' : `This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
        {
            'title' : 'LinkedIn',
            'link' : 'https://github.com/',
            'description' : `This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
        {
            'title' : 'Kagle',
            'link' : 'https://github.com/',
            'description' : `This is Description You can Log in and View  my profile
            This is Description You can Log in and View  my profile
            This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
        {
            'title' : 'Instagram',
            'link' : 'https://github.com/',
            'description' : `This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile
                             This is Description You can Log in and View  my profile`,
            'badge' : 'Repo\'s',
        },
]

function Display(){
    return (
        <div className='row'>
        {
            socialmedia.map((key) =>
                <div key={key} className='col col-lg-3 col-sm-12 col-md-6'>
                    <div className='card bg-dark text-white p-2'>
                        <h3 className='card-title text-center'>{key.title}</h3>
                        <br/>
                        <p className='card-subtitle'></p>
                        <p className='card-text'>{key.description}</p>
                        <p className='badge'>{key.badge}</p>
                        <a href={key.link} className='card-link'>Click here</a>
                    </div>
                </div>
            )
        }
        </div>
    );
}

export default Display;
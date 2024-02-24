const projects = [
    {
        'title' : 'Project1',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://www.pexels.com/photo/plasma-ball-illustration-414860/',
        'imglink' : 'images/project.jpg'
    },
    {
        'title' : 'Project2',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://www.pexels.com/photo/plasma-ball-illustration-414860/',
        'imglink' : 'images/project.jpg'
    },
    {
        'title' : 'Project3',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://www.pexels.com/photo/plasma-ball-illustration-414860/',
        'imglink' : 'images/project.jpg'
    },
    {
        'title' : 'Project4',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://www.pexels.com/photo/plasma-ball-illustration-414860/',
        'imglink' : 'images/project.jpg'
    },
    {
        'title' : 'Project5',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://www.pexels.com/photo/plasma-ball-illustration-414860/',
        'imglink' : 'images/project.jpg'
    },
    {
        'title' : 'Project6',
        'decription' : 'This is Description You can Log in and View  my profile',
        'link' : 'https://www.pexels.com/photo/plasma-ball-illustration-414860/',
        'imglink' : 'images/project.jpg'
    },
]

export default function Gallery(){
    return (
        <div className='row'>
        {
            projects.map(key =>
                <div key={key.title} className='col col-lg-2'>
                    <img src={key.imglink} alt='pic insteed' style={{'width' : "100%",'height' : "auto"}} className="mb-3 me-auto" />
                </div>
            )
        }
        </div>
    );
}

// export default Gallery;
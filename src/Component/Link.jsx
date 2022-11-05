import React from 'react'



const weblinks = [
    {
        name: "Twitter Link",
        weblink: " https://twitter.com/muhaj_dev",
        id: "twitter"
      },
      {
        name: "Zuri Team",
        weblink: "https://training.zuri.team/",
        id: "btn__zuri"
      },
      {
        name: "Zuri Books",
        weblink: "http://books.zuri.team",
        id: "books"
      },
      {
        name: "Python Books",
        weblink: "https://books.zuri.team/python-for-beginners?ref_id=<muhaj>",
        id: "book__python"
      },
      {
        name: "Background Check for Coders",
        weblink: "https://backgroundcheck.zuri.team/",
        id: "pitch"
      },
      {
        name: "Design Books",
        weblink: "https://books.zuri.team/design-rules",
        id: "book__design"
      },
  ];

const Link = () => {
  return (
    <div className='app__links'>
        {weblinks.map(({ name, weblink, id, index }) => 
            <div key={id} className='links'>
                <a 
                  id={id} 
                  href={weblink}
                >
                  {name}
                </a>
            </div>
        )}
    </div>
  )
}

export default Link
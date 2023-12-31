export default function About() {
    return (
      <div className="text-center p-4 pt-20 text-white align-middle min-h-screen">
        <h1 className="text-5xl font-bold">About Me</h1>
        <div className="flex">
            <p className="text-xl mt-2 p-10">Thank you for visiting my website! I'm currently a computer science student at UTM,
            and I'm aspiring to be a back-end developer in the future. I enjoy listening
            to music and watching anime, and I'm also a home workout enthusiast 😎
            </p>
            <img src="/about1.jpeg" alt="" className="max-w-64 border-4 border-blue-900 rounded-full ml-4" />
        </div>
  
        <h2 className="mt-4 text-5xl font-bold">What matters to me</h2>
        <p className="text-xl mt-2 p-5">Before taking a dive into my technical skills, I want to point out two values that I take the most pride in.</p>
        <div className="flex">
            <img src="/about2.jpeg" alt="" className="max-w-64 border-4 border-blue-900 rounded-full ml-4" />
            <li className="text-xl mt-2 p-10">
            Firstly, <span className="font-bold hover:text-blue-900 duration-500">accountability</span>,
            especially in terms of my work ethic. I deliver on commitments and can be depended upon to 
            fulfill tasks and responsibilities, I take ownership of my work, and, I adapt to changes in the game-plan.</li>
            
            <li className="text-xl mt-2 p-10">
            Secondly, I prioritize <span className="font-bold hover:text-blue-900 duration-500">collaboration</span>. 
            I believe that teamwork tends to be underestimated in the field of development. Often, the focus is placed on an individual 
            developer's achievements rather than recognizing their contribution within a team. At the end of the day, 
            the ability of an individual to leverage their skill set beyond mere code-writing is what 
            truly sets them apart.
            </li>

            
        </div>
      </div>
    );
  }
  
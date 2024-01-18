export default function About() {
    return (
      <div className="text-center p-40 pt-20 text-blue-900 align-middle min-h-screen w-screen">
        <h1 className="text-5xl text-justify font-bold">About Me</h1>
        <div className="flex">
            <p className="text-xl text-justify mt-10">Thank you for visiting my website! I'm currently a computer science student at UTM, and I'm aspiring to be a back-end developer in the future. I enjoy listening to music and watching anime, and I'm also a home workout enthusiast 😎
            </p>
            <img src="/about1.jpeg" alt="" className="max-w-64 max-h-64 border-4 border-blue-900 rounded-full ml-4 shadow-2xl" />
        </div>
  
        <h2 className="mt-4 text-3xl text-left font-bold">What Matters to Me?</h2>
        <p className="text-xl text-left mt-2 py-10 ml">Before taking a dive into my technical skills, I want to point out two values that I take the most pride in.</p>

        <div className="flex align-middle">
        <img src="/about2.jpeg" alt="" className="w-80 h-80 border-4 border-blue-900 rounded-full ml-4 shadow-2xl" />
        <div className="justify-between align-middle">
            <li className="text-xl text-justify px-5">
            Firstly, <span className="font-bold hover:text-orange-300 duration-500">accountability</span>,
            especially in terms of my work ethic. I deliver on commitments and can be depended upon to 
            fulfill tasks and responsibilities, I take ownership of my work, and, I adapt to changes in the game-plan.</li>
            <br />
            <li className="text-xl text-justify px-5">
            Secondly, I prioritize <span className="font-bold hover:text-orange-300 duration-500">collaboration</span>. 
            I believe that teamwork tends to be underestimated in the field of development. Often, the focus is placed on an individual 
            developer's achievements rather than recognizing their contribution within a team. At the end of the day, 
            the ability of an individual to leverage their skill set beyond mere code-writing is what 
            truly sets them apart.
            </li>

            
        </div>
        </div>
      </div>
    );
  }
  
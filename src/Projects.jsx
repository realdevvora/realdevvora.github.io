import ProjectBlock from "./components/ProjectBlock"

export default function Projects() {

    return (
        <div className="min-h-screen justify-evenly row-auto pt-20 p-40 bg-gradient-to-b from-white to-blue-900">
            <h1 className="text-5xl text-center p-10">Projects</h1>
            <ProjectBlock title="Cat-CnC ⚙️" details="A full stack application attempting to mimic AirBnB using the MERN stack, Firebase, and Tailwind CSS." image="/catlogo.png" github="https://github.com/realdevvora/AirBnB-Clone" actual="#"/>
            <ProjectBlock title="Tail-Trackr ✅" details="Take pictures of lost/stray animals and report them! I worked on the back-end for this project, including the API routes, connecting them to the React front-end, and the user authentication including emails." image="/tail-logo.jpeg" github="https://github.com/utmgdsc/TAIL-Trackr" actual="https://github.com/utmgdsc/TAIL-Trackr"/>
            <ProjectBlock title="Course Evaluations ✅" details="My first full stack application, made using the MERN stack." image="/course-logo.jpeg" github="https://github.com/realdevvora/course-evaluations" actual="https://evaluation-frontend.onrender.com/"/>
        </div>
    )
}
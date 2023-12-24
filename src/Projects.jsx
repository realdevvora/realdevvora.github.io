import ProjectBlock from "./components/ProjectBlock"

export default function Projects() {

    return (
        <div className="min-h-screen justify-evenly row-auto">
            <ProjectBlock title="Air-BnB Clone ⚙️" details="A full stack application attempting to mimic AirBnB using the MERN stack, Firebase, and Tailwind CSS." image="/airbnb-logo.png" github="https://github.com/realdevvora/AirBnB-Clone" actual="#"/>
            <ProjectBlock title="Tail-Trackr ⚙️" details="Take pictures of lost/stray animals and report them! I worked on the back-end for this project, including the API routes, connecting them to the React front-end, and the user authentication including emails." image="/tail-logo.jpeg" github="https://github.com/utmgdsc/TAIL-Trackr" actual="#"/>
            <ProjectBlock title="Course Evaluations ✅" details="My first full stack application, made using the MERN stack." image="/course-logo.jpeg" github="https://github.com/realdevvora/course-evaluations" actual="https://evaluation-frontend.onrender.com/"/>
        </div>
    )
}
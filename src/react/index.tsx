import React from "react";
import * as ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Link,
    Redirect
} from "react-router-dom";

import Header from "./Header";
import { lessons } from "./../data/lessons";
import { courses } from "./../data/courses";
import { Lesson, LessonBrowser } from "./Lesson";
import { DataContext } from "./Data";
import { BlockList } from "./BlockList";

type JSXChildren = JSX.Element|JSX.Element[];


const Home = () => <h3>Home</h3>



interface CourseDetailsProps {
    id: string
}

const CourseDetails = ({ id }: CourseDetailsProps) => {

    const lessonData = lessons.filter(lesson => lesson.course_id.toString() === id);

    return (
        <LessonBrowser lessonData={ lessonData }/>
    )
}

const CourseBrowser = () => {



    const courseData = courses.map(course => {
        return {
            id: course.id,
            left: `${course.lessons.length} Lekci`,
            right: "0 minut",
            title: course.title,
            blocklink: `courses?id=${course.id}`
        }
    });

    return (
        <section>
            <header>
                Kurzy
            </header>
            <aside>
            Kurzy tě teoreticky připravují na praktické vzdělávací projekty. V průběhu kurzů dávej pozor! Uzavírá je zpravidla kvíz.
            </aside>
            <BlockList blockdata={ courseData }/>
        </section>
    )
}

const Courses = () => {
    const location = useLocation();
    let params = new URLSearchParams(location.search);

    let id = params.get("id");
    
    if (id != null) {
        return <CourseDetails id={ id } />
    } else {
        return <CourseBrowser />
    }
}

const Projects = () => <h3>Projekty</h3>
const Login = () => <h3>Login</h3>
const NotFound = () => <h3>404</h3>

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/courses" component={ Courses} />
                <Route path="/projects" component={ Projects } />
                <Route path="/lessons" component={ Lesson } />
                <Route path="/login" component={ Login } />
                <Route path="*" component={ NotFound } />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App/>, document.querySelector("#App"));
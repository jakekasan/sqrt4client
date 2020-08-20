import React, { FunctionComponent } from "react";
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

import "./../sass/main.scss";
import { Background } from "./Background";

type JSXChildren = JSX.Element|JSX.Element[];


const Home = () => <main>Home</main>



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
        <main>
            <header>
                Kurzy
            </header>
            <aside>
            Kurzy tě teoreticky připravují na praktické vzdělávací projekty. V průběhu kurzů dávej pozor! Uzavírá je zpravidla kvíz.
            </aside>
            <BlockList blockdata={ courseData }/>
        </main>
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

const Placeholder: FunctionComponent<{text: string}> = ({text}) => <main><h5>{ text }</h5></main>
const Projects = () => <Placeholder text="Projects" />
const Login = () => <Placeholder text="Login" />
const NotFound = () => <Placeholder text="NotFound" />

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
            <Background />
        </Router>
    )
}

ReactDOM.render(<App/>, document.querySelector("#App"));
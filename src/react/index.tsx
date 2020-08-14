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


type JSXChildren = JSX.Element|JSX.Element[];
type TextChild = string;

interface BaseTypes {
    children: TextChild|JSXChildren
}

interface TextProps {
    children: TextChild
}

const Home = () => <h3>Home</h3>

interface BlockData {
    id: number,
    title: string,
    left: string,
    right: string,
    blocklink: string
}

interface BlockListProps {
    blockdata: BlockData[]
}

const BlockTitle = ({ children }: TextProps) => <h5>{ children }</h5>
const BlockLeft = ({ children }: TextProps) => <p>{ children }</p>
const BlockRight = ({ children }: TextProps) => <p>{ children }</p>

const Block = ({ id, title, left, right, blocklink}: BlockData) => {
    return (
        <Link to={ blocklink }>
            <BlockTitle>{ title }</BlockTitle>
            <BlockLeft>{ left }</BlockLeft>
            <BlockRight>{ right }</BlockRight>
        </Link>
    )
}

const BlockList = ({ blockdata }: BlockListProps) => {
return (
    <ul>{ blockdata
            .map(({id, title, left, right, blocklink}: BlockData) => {
                return (
                    <li>
                        <Block key={ id } {...{id, title, left, right, blocklink}} />
                    </li>
                )})
        }</ul>)
}



type SubModuleData = {
    title: string,
    text: string[],
    pictureURL: string
}

type ModuleData = {
    id: number,
    title: string,
    submodules: SubModuleData[],
    minutes: number
}

type PartnerData = {
    name: string
}

type LessonData = {
    id: number,
    course_id: number,
    title: string,
    desc: string,
    modules: ModuleData[],
    author: string,
    partner: PartnerData|string,
    difficulty: number,
    quiz: string,
    titlePicture: string
}

type LessonSubmodule = {
    title: string,
    text: string[]
}

interface LessonBrowserProps {
    lessonData: LessonData[]
}
const LessonBrowser = ({ lessonData }: LessonBrowserProps) => {

    const lessonBlockData: BlockData[] = lessonData.map(lesson => {
        return {
            id: lesson.id,
            left: `${lesson.modules.length} Lekci`,
            right: "0 minut",
            title: lesson.title,
            blocklink: `lessons?id=${lesson.id}`
        }
    })

    return (
        <section>
            <header>Lekce</header>
            <BlockList blockdata={ lessonBlockData } />
        </section>
    )
}

const HourIcon = () => <i><img src=""/></i>

interface LessonDetailsProps {
    lesson: LessonData
}

interface LessonModulesProps {
    modules: ModuleData[]
}

interface SubmoduleGalleryProps {
    submodules: SubModuleData[]
}

const SubmoduleGallery = ({}: SubmoduleGalleryProps ) => {
    return (
        <ul></ul>
    )
}

const LessonModule = ({ id, title, submodules }: ModuleData) => {
    return (
        <article>
            <h2>
                { `${id}: ${title}` }
            </h2>
            <SubmoduleGallery submodules={ submodules } />
        </article>
    )
}

const LessonModules = ({ modules }: LessonModulesProps) => {
    return (
        <ol>
            { modules.map(module => <li key={ module.id }><LessonModule { ...module } /></li>) }
        </ol>
    )
}

const LessonDetails = ({ lesson }: LessonDetailsProps) => {
    return (
        <article>
            <aside>
                <img src="" alt=""/>
            </aside>
            <section>
                <h1>{ lesson.title }</h1>
                <p>{ lesson.desc ?? "Bez popisu." }</p>
                <ul>
                    <li key="hour"><HourIcon />{ lesson.modules.reduce((total, module) => module.minutes + total, 0) }</li>
                    <li>Difficulty</li>
                    <li>Author</li>
                    <li>Partner</li>
                </ul>
            </section>
            <LessonModules modules={ lesson.modules } />
        </article>

    )
}

const Lesson = () => {
    const { search } = useLocation();

    const id = new URLSearchParams(search).get("id");

    if (id == null || id == undefined) {
        return <Redirect to="/notfound" />
    } else {
        let [data] = lessons.filter(lesson => lesson.id.toString() === id);
        
        return (
            <LessonDetails lesson={ data } />
        )
    }
}

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
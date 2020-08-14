import React, { useContext } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { BlockList, BlockData } from "./BlockList";
import {
    DataContext,
    LessonData,
    ModuleData,
    SubModuleData
} from "./Data";

type LessonSubmodule = {
    title: string,
    text: string[]
}

interface LessonBrowserProps {
    lessonData: LessonData[]
}

export const LessonBrowser = ({ lessonData }: LessonBrowserProps) => {

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

export const Lesson = () => {
    const { search } = useLocation();
    const { lessons } = useContext(DataContext);

    const id = new URLSearchParams(search).get("id");

    if (id == null || id == undefined) {
        return <Redirect to="/notfound" />
    } else {
        let [data] = lessons.getAll().filter((lesson: LessonData) => lesson.id.toString() === id);
        
        return (
            <LessonDetails lesson={ data } />
        )
    }
}

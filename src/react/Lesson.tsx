import React, { useContext, useState, FunctionComponent } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { BlockList, BlockData } from "./BlockList";
import {
    DataContext,
    LessonData,
    ModuleData,
    SubModuleData
} from "./Data";
import { link } from "fs";

type LessonSubmodule = {
    title: string,
    text: string[]
}

interface LessonBrowserProps {
    lessonData: LessonData[]
}

export const LessonBrowser: FunctionComponent<LessonBrowserProps> = ({ lessonData }) => {

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
        <main>
            <header>Lekce</header>
            <BlockList blockdata={ lessonBlockData } />
        </main>
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

interface ImageProps {
    url: string
}

const Image: FunctionComponent<ImageProps> = ({ url }) => <img src={ url }/>

const SubmoduleGallery: FunctionComponent<SubmoduleGalleryProps> = ({ submodules } ) => {

    const [ currentPage, setCurrentPage ] = useState<number>(0);

    const { title, text, pictureURL } = submodules[currentPage];

    return (
        <section>
            <Image url={ pictureURL } />
            <ul>
                { submodules.map((submodule, i) => {
                    return (
                        <li key={ i } onClick={ () => setCurrentPage(i) }>
                            <a href="#">
                                { submodule.title }
                            </a>
                        </li>)
                }) }
            </ul>
            <article>
                <h5>{ title }</h5>
                <ul>
                    { text.map((tx, i) => <li key={ i }>{ tx }</li>)}
                </ul>
            </article>
        </section>
    )
}

const LessonModule: FunctionComponent<ModuleData> = ({ id, title, submodules }: ModuleData) => {
    return (
        <article>
            <h2>
                { `${id}: ${title}` }
            </h2>
            <SubmoduleGallery submodules={ submodules } />
        </article>
    )
}

const LessonModules: FunctionComponent<LessonModulesProps> = ({ modules }) => {
    return (
        <ol>
            { modules.map(module => <li key={ module.id }><LessonModule { ...module } /></li>) }
        </ol>
    )
}

const LessonDetails: FunctionComponent<LessonDetailsProps> = ({ lesson }) => {
    return (
        <main>
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
        </main>

    )
}

export const Lesson: FunctionComponent<{}> = () => {
    const { search } = useLocation();
    const { lessons } = useContext(DataContext);

    const id = new URLSearchParams(search).get("id");

    if (id == null || id == undefined) {
        return <Redirect to="/notfound" />
    } else {

        let [ data ] = lessons.getAll().filter((lesson: LessonData) => lesson.id.toString() === id);
        
        return (
            <LessonDetails lesson={ data } />
        )
    }
}

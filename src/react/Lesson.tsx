import React, { useContext, useState, FunctionComponent } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { BlockList, BlockData } from "./BlockList";
import {
    DataContext,
    LessonData,
    ModuleData,
    SubModuleData
} from "./Data";

import Homer from "./../img/homer.png";

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
const ContainedImage: FunctionComponent<ImageProps> = (props) => <div className="img-container"><Image {...props} /></div>

const SubmoduleGallery: FunctionComponent<SubmoduleGalleryProps> = ({ submodules } ) => {

    const [ currentPage, setCurrentPage ] = useState<number>(0);

    const { title, text, pictureURL } = submodules[currentPage];

    return (
        <section>
            <ContainedImage url={ Homer as string } />
            <ul className="submodule-gallery">
                { submodules.map((submodule, i) => {
                    return (
                        <li key={ i } onClick={ () => setCurrentPage(i) } title={ submodule.title }>
                            <a href="#/">
                                <Image url={ Homer as string }></Image>
                            </a>
                        </li>)
                }) }
            </ul>
            <article>
                <h5>{ title }</h5>
                <p>
                    { text.reduce((acc, cur) => acc + `\n${cur}`, "")}
                </p>
            </article>
        </section>
    )
}

const LessonModule: FunctionComponent<ModuleData> = ({ id, title, submodules }: ModuleData) => {
    return (
        <article className="lesson-module">
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
            { modules.map(module => <li className="card" key={ module.id }><LessonModule { ...module } /></li>) }
        </ol>
    )
}

const LessonDetails: FunctionComponent<LessonDetailsProps> = ({ lesson }) => {
    return (
        <main className="lesson-details">
            <aside className="card">
                <img src="" alt=""/>
            </aside>
            <section className="card">
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

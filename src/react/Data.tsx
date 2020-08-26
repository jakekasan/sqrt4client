import React from "react";

import { lessons as LESSON_DATA } from "./../data/lessons";
import { courses as COURSE_DATA } from "./../data/courses";

interface IModel<T> {

    getAll(): T[]

    getById(id: number|string): T

}

export type SubModuleData = {
    title: string,
    text: string[],
    pictureURL: string
}

export type ModuleData = {
    id: number,
    title: string,
    submodules: SubModuleData[],
    minutes: number
}

export type PartnerData = {
    name: string
}

export type LessonData = {
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

export type CourseData = {}

export const LessonModel: IModel<LessonData> = {

    getAll(): LessonData[] {
        return [...LESSON_DATA]
    },

    getById(id: number|string): LessonData {
        const [ lesson ] = LESSON_DATA.filter(l => l.id === id)

        return lesson
    }
}

export const CourseModel: IModel<CourseData> = {

    getAll(): CourseData[] {
        return [...LESSON_DATA]
    },

    getById(id: number|string): CourseData {
        const [ course ] = COURSE_DATA.filter(c => c.id === id)

        return course
    }
}

export const DataContext = React.createContext({
    courses: CourseModel,
    lessons: LessonModel
})
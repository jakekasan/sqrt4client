import React from "react";
import { Link } from "react-router-dom";


export interface BlockData {
    id: number,
    title: string,
    left: string,
    right: string,
    blocklink: string
}

interface BlockListProps {
    blockdata: BlockData[]
}

type TextChild = string;

interface TextProps {
    children: TextChild
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

export const BlockList = ({ blockdata }: BlockListProps) => {
    return (
        <ul>
            { blockdata
                .map(({id, title, left, right, blocklink}: BlockData) => {
                    return (
                        <li>
                            <Block key={ id } {...{id, title, left, right, blocklink}} />
                        </li>
                    )})
            }
        </ul>)
}

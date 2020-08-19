import React, { FunctionComponent } from "react";
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

const BlockTitle: FunctionComponent<{}> = ({ children }) => <header><h5>{ children }</h5></header>
const BlockLeft: FunctionComponent<{}> = ({ children }) => <p className="left">{ children }</p>
const BlockRight: FunctionComponent<{}> = ({ children }) => <p className="right">{ children }</p>
const BlockParts: FunctionComponent<{}> = ({ children }) => <aside>{ children }</aside>


const Block: FunctionComponent<BlockData> = ({ id, title, left, right, blocklink}) => {
    return (
        <Link to={ blocklink }>
            <BlockTitle>{ title }</BlockTitle>
            <BlockParts>
                <BlockLeft>{ left }</BlockLeft>
                <BlockRight>{ right }</BlockRight>
            </BlockParts>
        </Link>
    )
}

export const BlockList: FunctionComponent<BlockListProps> = ({ blockdata }) => {
    return (
        <ul className="blocklist">
            { blockdata
                .map(({id, title, left, right, blocklink}) => {
                    return (
                        <li key={ id }>
                            <Block {...{id, title, left, right, blocklink}} />
                        </li>
                    )})
            }
        </ul>)
}

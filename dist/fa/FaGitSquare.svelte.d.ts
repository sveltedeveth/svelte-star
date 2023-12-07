import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaGitSquareProps = typeof __propDef.props;
export type FaGitSquareEvents = typeof __propDef.events;
export type FaGitSquareSlots = typeof __propDef.slots;
export default class FaGitSquare extends SvelteComponentTyped<FaGitSquareProps, FaGitSquareEvents, FaGitSquareSlots> {
}
export {};

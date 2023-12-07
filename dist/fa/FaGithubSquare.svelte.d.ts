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
export type FaGithubSquareProps = typeof __propDef.props;
export type FaGithubSquareEvents = typeof __propDef.events;
export type FaGithubSquareSlots = typeof __propDef.slots;
export default class FaGithubSquare extends SvelteComponentTyped<FaGithubSquareProps, FaGithubSquareEvents, FaGithubSquareSlots> {
}
export {};

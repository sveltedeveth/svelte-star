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
export type FaRedditSquareProps = typeof __propDef.props;
export type FaRedditSquareEvents = typeof __propDef.events;
export type FaRedditSquareSlots = typeof __propDef.slots;
export default class FaRedditSquare extends SvelteComponentTyped<FaRedditSquareProps, FaRedditSquareEvents, FaRedditSquareSlots> {
}
export {};

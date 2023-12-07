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
export type FaHackerNewsSquareProps = typeof __propDef.props;
export type FaHackerNewsSquareEvents = typeof __propDef.events;
export type FaHackerNewsSquareSlots = typeof __propDef.slots;
export default class FaHackerNewsSquare extends SvelteComponentTyped<FaHackerNewsSquareProps, FaHackerNewsSquareEvents, FaHackerNewsSquareSlots> {
}
export {};

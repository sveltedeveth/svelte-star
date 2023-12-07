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
export type FaSquareProps = typeof __propDef.props;
export type FaSquareEvents = typeof __propDef.events;
export type FaSquareSlots = typeof __propDef.slots;
export default class FaSquare extends SvelteComponentTyped<FaSquareProps, FaSquareEvents, FaSquareSlots> {
}
export {};

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
export type FaCheckSquareProps = typeof __propDef.props;
export type FaCheckSquareEvents = typeof __propDef.events;
export type FaCheckSquareSlots = typeof __propDef.slots;
export default class FaCheckSquare extends SvelteComponentTyped<FaCheckSquareProps, FaCheckSquareEvents, FaCheckSquareSlots> {
}
export {};

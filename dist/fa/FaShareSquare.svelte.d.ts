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
export type FaShareSquareProps = typeof __propDef.props;
export type FaShareSquareEvents = typeof __propDef.events;
export type FaShareSquareSlots = typeof __propDef.slots;
export default class FaShareSquare extends SvelteComponentTyped<FaShareSquareProps, FaShareSquareEvents, FaShareSquareSlots> {
}
export {};

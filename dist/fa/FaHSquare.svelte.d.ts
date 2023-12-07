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
export type FaHSquareProps = typeof __propDef.props;
export type FaHSquareEvents = typeof __propDef.events;
export type FaHSquareSlots = typeof __propDef.slots;
export default class FaHSquare extends SvelteComponentTyped<FaHSquareProps, FaHSquareEvents, FaHSquareSlots> {
}
export {};

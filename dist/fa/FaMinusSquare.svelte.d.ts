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
export type FaMinusSquareProps = typeof __propDef.props;
export type FaMinusSquareEvents = typeof __propDef.events;
export type FaMinusSquareSlots = typeof __propDef.slots;
export default class FaMinusSquare extends SvelteComponentTyped<FaMinusSquareProps, FaMinusSquareEvents, FaMinusSquareSlots> {
}
export {};

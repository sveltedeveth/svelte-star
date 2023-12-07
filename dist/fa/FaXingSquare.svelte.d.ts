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
export type FaXingSquareProps = typeof __propDef.props;
export type FaXingSquareEvents = typeof __propDef.events;
export type FaXingSquareSlots = typeof __propDef.slots;
export default class FaXingSquare extends SvelteComponentTyped<FaXingSquareProps, FaXingSquareEvents, FaXingSquareSlots> {
}
export {};

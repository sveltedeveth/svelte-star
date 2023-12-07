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
export type GiPlainSquareProps = typeof __propDef.props;
export type GiPlainSquareEvents = typeof __propDef.events;
export type GiPlainSquareSlots = typeof __propDef.slots;
export default class GiPlainSquare extends SvelteComponentTyped<GiPlainSquareProps, GiPlainSquareEvents, GiPlainSquareSlots> {
}
export {};

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
export type FaDribbbleSquareProps = typeof __propDef.props;
export type FaDribbbleSquareEvents = typeof __propDef.events;
export type FaDribbbleSquareSlots = typeof __propDef.slots;
export default class FaDribbbleSquare extends SvelteComponentTyped<FaDribbbleSquareProps, FaDribbbleSquareEvents, FaDribbbleSquareSlots> {
}
export {};

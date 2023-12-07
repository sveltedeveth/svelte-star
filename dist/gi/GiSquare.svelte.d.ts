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
export type GiSquareProps = typeof __propDef.props;
export type GiSquareEvents = typeof __propDef.events;
export type GiSquareSlots = typeof __propDef.slots;
export default class GiSquare extends SvelteComponentTyped<GiSquareProps, GiSquareEvents, GiSquareSlots> {
}
export {};

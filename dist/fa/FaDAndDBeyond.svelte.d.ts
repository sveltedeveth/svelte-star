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
export type FaDAndDBeyondProps = typeof __propDef.props;
export type FaDAndDBeyondEvents = typeof __propDef.events;
export type FaDAndDBeyondSlots = typeof __propDef.slots;
export default class FaDAndDBeyond extends SvelteComponentTyped<FaDAndDBeyondProps, FaDAndDBeyondEvents, FaDAndDBeyondSlots> {
}
export {};

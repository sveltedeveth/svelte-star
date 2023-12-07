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
export type FaDiceFiveProps = typeof __propDef.props;
export type FaDiceFiveEvents = typeof __propDef.events;
export type FaDiceFiveSlots = typeof __propDef.slots;
export default class FaDiceFive extends SvelteComponentTyped<FaDiceFiveProps, FaDiceFiveEvents, FaDiceFiveSlots> {
}
export {};

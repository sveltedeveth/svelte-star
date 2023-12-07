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
export type FaAviatoProps = typeof __propDef.props;
export type FaAviatoEvents = typeof __propDef.events;
export type FaAviatoSlots = typeof __propDef.slots;
export default class FaAviato extends SvelteComponentTyped<FaAviatoProps, FaAviatoEvents, FaAviatoSlots> {
}
export {};

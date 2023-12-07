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
export type FaTintProps = typeof __propDef.props;
export type FaTintEvents = typeof __propDef.events;
export type FaTintSlots = typeof __propDef.slots;
export default class FaTint extends SvelteComponentTyped<FaTintProps, FaTintEvents, FaTintSlots> {
}
export {};

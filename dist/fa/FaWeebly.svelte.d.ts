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
export type FaWeeblyProps = typeof __propDef.props;
export type FaWeeblyEvents = typeof __propDef.events;
export type FaWeeblySlots = typeof __propDef.slots;
export default class FaWeebly extends SvelteComponentTyped<FaWeeblyProps, FaWeeblyEvents, FaWeeblySlots> {
}
export {};

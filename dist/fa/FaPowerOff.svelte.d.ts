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
export type FaPowerOffProps = typeof __propDef.props;
export type FaPowerOffEvents = typeof __propDef.events;
export type FaPowerOffSlots = typeof __propDef.slots;
export default class FaPowerOff extends SvelteComponentTyped<FaPowerOffProps, FaPowerOffEvents, FaPowerOffSlots> {
}
export {};

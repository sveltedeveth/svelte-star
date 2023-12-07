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
export type FaGenderlessProps = typeof __propDef.props;
export type FaGenderlessEvents = typeof __propDef.events;
export type FaGenderlessSlots = typeof __propDef.slots;
export default class FaGenderless extends SvelteComponentTyped<FaGenderlessProps, FaGenderlessEvents, FaGenderlessSlots> {
}
export {};

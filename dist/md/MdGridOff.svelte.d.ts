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
export type MdGridOffProps = typeof __propDef.props;
export type MdGridOffEvents = typeof __propDef.events;
export type MdGridOffSlots = typeof __propDef.slots;
export default class MdGridOff extends SvelteComponentTyped<MdGridOffProps, MdGridOffEvents, MdGridOffSlots> {
}
export {};

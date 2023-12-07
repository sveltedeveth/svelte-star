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
export type MdOpenWithProps = typeof __propDef.props;
export type MdOpenWithEvents = typeof __propDef.events;
export type MdOpenWithSlots = typeof __propDef.slots;
export default class MdOpenWith extends SvelteComponentTyped<MdOpenWithProps, MdOpenWithEvents, MdOpenWithSlots> {
}
export {};

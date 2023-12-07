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
export type MdAddProps = typeof __propDef.props;
export type MdAddEvents = typeof __propDef.events;
export type MdAddSlots = typeof __propDef.slots;
export default class MdAdd extends SvelteComponentTyped<MdAddProps, MdAddEvents, MdAddSlots> {
}
export {};

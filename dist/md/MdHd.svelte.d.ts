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
export type MdHdProps = typeof __propDef.props;
export type MdHdEvents = typeof __propDef.events;
export type MdHdSlots = typeof __propDef.slots;
export default class MdHd extends SvelteComponentTyped<MdHdProps, MdHdEvents, MdHdSlots> {
}
export {};

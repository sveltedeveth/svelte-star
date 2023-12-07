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
export type MdMicOffProps = typeof __propDef.props;
export type MdMicOffEvents = typeof __propDef.events;
export type MdMicOffSlots = typeof __propDef.slots;
export default class MdMicOff extends SvelteComponentTyped<MdMicOffProps, MdMicOffEvents, MdMicOffSlots> {
}
export {};

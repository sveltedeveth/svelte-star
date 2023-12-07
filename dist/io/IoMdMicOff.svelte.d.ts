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
export type IoMdMicOffProps = typeof __propDef.props;
export type IoMdMicOffEvents = typeof __propDef.events;
export type IoMdMicOffSlots = typeof __propDef.slots;
export default class IoMdMicOff extends SvelteComponentTyped<IoMdMicOffProps, IoMdMicOffEvents, IoMdMicOffSlots> {
}
export {};

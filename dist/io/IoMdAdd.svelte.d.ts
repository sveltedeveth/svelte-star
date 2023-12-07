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
export type IoMdAddProps = typeof __propDef.props;
export type IoMdAddEvents = typeof __propDef.events;
export type IoMdAddSlots = typeof __propDef.slots;
export default class IoMdAdd extends SvelteComponentTyped<IoMdAddProps, IoMdAddEvents, IoMdAddSlots> {
}
export {};

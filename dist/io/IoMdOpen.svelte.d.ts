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
export type IoMdOpenProps = typeof __propDef.props;
export type IoMdOpenEvents = typeof __propDef.events;
export type IoMdOpenSlots = typeof __propDef.slots;
export default class IoMdOpen extends SvelteComponentTyped<IoMdOpenProps, IoMdOpenEvents, IoMdOpenSlots> {
}
export {};

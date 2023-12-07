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
export type IoMdResizeProps = typeof __propDef.props;
export type IoMdResizeEvents = typeof __propDef.events;
export type IoMdResizeSlots = typeof __propDef.slots;
export default class IoMdResize extends SvelteComponentTyped<IoMdResizeProps, IoMdResizeEvents, IoMdResizeSlots> {
}
export {};

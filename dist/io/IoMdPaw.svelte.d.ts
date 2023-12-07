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
export type IoMdPawProps = typeof __propDef.props;
export type IoMdPawEvents = typeof __propDef.events;
export type IoMdPawSlots = typeof __propDef.slots;
export default class IoMdPaw extends SvelteComponentTyped<IoMdPawProps, IoMdPawEvents, IoMdPawSlots> {
}
export {};

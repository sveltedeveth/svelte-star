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
export type IoMdAttachProps = typeof __propDef.props;
export type IoMdAttachEvents = typeof __propDef.events;
export type IoMdAttachSlots = typeof __propDef.slots;
export default class IoMdAttach extends SvelteComponentTyped<IoMdAttachProps, IoMdAttachEvents, IoMdAttachSlots> {
}
export {};

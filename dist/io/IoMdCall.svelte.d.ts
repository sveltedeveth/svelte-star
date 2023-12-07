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
export type IoMdCallProps = typeof __propDef.props;
export type IoMdCallEvents = typeof __propDef.events;
export type IoMdCallSlots = typeof __propDef.slots;
export default class IoMdCall extends SvelteComponentTyped<IoMdCallProps, IoMdCallEvents, IoMdCallSlots> {
}
export {};

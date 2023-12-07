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
export type IoMdRainyProps = typeof __propDef.props;
export type IoMdRainyEvents = typeof __propDef.events;
export type IoMdRainySlots = typeof __propDef.slots;
export default class IoMdRainy extends SvelteComponentTyped<IoMdRainyProps, IoMdRainyEvents, IoMdRainySlots> {
}
export {};

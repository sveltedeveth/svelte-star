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
export type IoMdGridProps = typeof __propDef.props;
export type IoMdGridEvents = typeof __propDef.events;
export type IoMdGridSlots = typeof __propDef.slots;
export default class IoMdGrid extends SvelteComponentTyped<IoMdGridProps, IoMdGridEvents, IoMdGridSlots> {
}
export {};

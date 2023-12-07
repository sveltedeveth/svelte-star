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
export type IoMdBedProps = typeof __propDef.props;
export type IoMdBedEvents = typeof __propDef.events;
export type IoMdBedSlots = typeof __propDef.slots;
export default class IoMdBed extends SvelteComponentTyped<IoMdBedProps, IoMdBedEvents, IoMdBedSlots> {
}
export {};

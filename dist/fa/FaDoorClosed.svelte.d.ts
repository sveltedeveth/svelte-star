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
export type FaDoorClosedProps = typeof __propDef.props;
export type FaDoorClosedEvents = typeof __propDef.events;
export type FaDoorClosedSlots = typeof __propDef.slots;
export default class FaDoorClosed extends SvelteComponentTyped<FaDoorClosedProps, FaDoorClosedEvents, FaDoorClosedSlots> {
}
export {};

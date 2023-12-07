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
export type MdGpsFixedProps = typeof __propDef.props;
export type MdGpsFixedEvents = typeof __propDef.events;
export type MdGpsFixedSlots = typeof __propDef.slots;
export default class MdGpsFixed extends SvelteComponentTyped<MdGpsFixedProps, MdGpsFixedEvents, MdGpsFixedSlots> {
}
export {};

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
export type MdEventSeatProps = typeof __propDef.props;
export type MdEventSeatEvents = typeof __propDef.events;
export type MdEventSeatSlots = typeof __propDef.slots;
export default class MdEventSeat extends SvelteComponentTyped<MdEventSeatProps, MdEventSeatEvents, MdEventSeatSlots> {
}
export {};

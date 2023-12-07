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
export type MdCallMissedProps = typeof __propDef.props;
export type MdCallMissedEvents = typeof __propDef.events;
export type MdCallMissedSlots = typeof __propDef.slots;
export default class MdCallMissed extends SvelteComponentTyped<MdCallMissedProps, MdCallMissedEvents, MdCallMissedSlots> {
}
export {};

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
export type MdAvTimerProps = typeof __propDef.props;
export type MdAvTimerEvents = typeof __propDef.events;
export type MdAvTimerSlots = typeof __propDef.slots;
export default class MdAvTimer extends SvelteComponentTyped<MdAvTimerProps, MdAvTimerEvents, MdAvTimerSlots> {
}
export {};

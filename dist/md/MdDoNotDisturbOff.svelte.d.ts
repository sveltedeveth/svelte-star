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
export type MdDoNotDisturbOffProps = typeof __propDef.props;
export type MdDoNotDisturbOffEvents = typeof __propDef.events;
export type MdDoNotDisturbOffSlots = typeof __propDef.slots;
export default class MdDoNotDisturbOff extends SvelteComponentTyped<MdDoNotDisturbOffProps, MdDoNotDisturbOffEvents, MdDoNotDisturbOffSlots> {
}
export {};

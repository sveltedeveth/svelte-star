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
export type MdSnoozeProps = typeof __propDef.props;
export type MdSnoozeEvents = typeof __propDef.events;
export type MdSnoozeSlots = typeof __propDef.slots;
export default class MdSnooze extends SvelteComponentTyped<MdSnoozeProps, MdSnoozeEvents, MdSnoozeSlots> {
}
export {};

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
export type MdPhonePausedProps = typeof __propDef.props;
export type MdPhonePausedEvents = typeof __propDef.events;
export type MdPhonePausedSlots = typeof __propDef.slots;
export default class MdPhonePaused extends SvelteComponentTyped<MdPhonePausedProps, MdPhonePausedEvents, MdPhonePausedSlots> {
}
export {};

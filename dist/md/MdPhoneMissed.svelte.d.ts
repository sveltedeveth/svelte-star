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
export type MdPhoneMissedProps = typeof __propDef.props;
export type MdPhoneMissedEvents = typeof __propDef.events;
export type MdPhoneMissedSlots = typeof __propDef.slots;
export default class MdPhoneMissed extends SvelteComponentTyped<MdPhoneMissedProps, MdPhoneMissedEvents, MdPhoneMissedSlots> {
}
export {};

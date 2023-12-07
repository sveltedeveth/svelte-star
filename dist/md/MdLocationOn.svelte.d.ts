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
export type MdLocationOnProps = typeof __propDef.props;
export type MdLocationOnEvents = typeof __propDef.events;
export type MdLocationOnSlots = typeof __propDef.slots;
export default class MdLocationOn extends SvelteComponentTyped<MdLocationOnProps, MdLocationOnEvents, MdLocationOnSlots> {
}
export {};

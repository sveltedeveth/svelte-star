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
export type MdEventAvailableProps = typeof __propDef.props;
export type MdEventAvailableEvents = typeof __propDef.events;
export type MdEventAvailableSlots = typeof __propDef.slots;
export default class MdEventAvailable extends SvelteComponentTyped<MdEventAvailableProps, MdEventAvailableEvents, MdEventAvailableSlots> {
}
export {};

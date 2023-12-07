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
export type MdEventProps = typeof __propDef.props;
export type MdEventEvents = typeof __propDef.events;
export type MdEventSlots = typeof __propDef.slots;
export default class MdEvent extends SvelteComponentTyped<MdEventProps, MdEventEvents, MdEventSlots> {
}
export {};

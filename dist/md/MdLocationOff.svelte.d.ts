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
export type MdLocationOffProps = typeof __propDef.props;
export type MdLocationOffEvents = typeof __propDef.events;
export type MdLocationOffSlots = typeof __propDef.slots;
export default class MdLocationOff extends SvelteComponentTyped<MdLocationOffProps, MdLocationOffEvents, MdLocationOffSlots> {
}
export {};

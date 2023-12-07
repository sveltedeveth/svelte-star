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
export type MdGpsOffProps = typeof __propDef.props;
export type MdGpsOffEvents = typeof __propDef.events;
export type MdGpsOffSlots = typeof __propDef.slots;
export default class MdGpsOff extends SvelteComponentTyped<MdGpsOffProps, MdGpsOffEvents, MdGpsOffSlots> {
}
export {};

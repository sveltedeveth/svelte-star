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
export type MdMonetizationOnProps = typeof __propDef.props;
export type MdMonetizationOnEvents = typeof __propDef.events;
export type MdMonetizationOnSlots = typeof __propDef.slots;
export default class MdMonetizationOn extends SvelteComponentTyped<MdMonetizationOnProps, MdMonetizationOnEvents, MdMonetizationOnSlots> {
}
export {};

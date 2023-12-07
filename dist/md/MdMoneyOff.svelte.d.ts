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
export type MdMoneyOffProps = typeof __propDef.props;
export type MdMoneyOffEvents = typeof __propDef.events;
export type MdMoneyOffSlots = typeof __propDef.slots;
export default class MdMoneyOff extends SvelteComponentTyped<MdMoneyOffProps, MdMoneyOffEvents, MdMoneyOffSlots> {
}
export {};

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
export type MdFiberPinProps = typeof __propDef.props;
export type MdFiberPinEvents = typeof __propDef.events;
export type MdFiberPinSlots = typeof __propDef.slots;
export default class MdFiberPin extends SvelteComponentTyped<MdFiberPinProps, MdFiberPinEvents, MdFiberPinSlots> {
}
export {};

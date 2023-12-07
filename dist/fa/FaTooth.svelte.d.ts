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
export type FaToothProps = typeof __propDef.props;
export type FaToothEvents = typeof __propDef.events;
export type FaToothSlots = typeof __propDef.slots;
export default class FaTooth extends SvelteComponentTyped<FaToothProps, FaToothEvents, FaToothSlots> {
}
export {};

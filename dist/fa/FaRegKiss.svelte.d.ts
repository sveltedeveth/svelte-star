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
export type FaRegKissProps = typeof __propDef.props;
export type FaRegKissEvents = typeof __propDef.events;
export type FaRegKissSlots = typeof __propDef.slots;
export default class FaRegKiss extends SvelteComponentTyped<FaRegKissProps, FaRegKissEvents, FaRegKissSlots> {
}
export {};

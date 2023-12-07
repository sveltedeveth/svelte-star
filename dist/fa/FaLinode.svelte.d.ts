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
export type FaLinodeProps = typeof __propDef.props;
export type FaLinodeEvents = typeof __propDef.events;
export type FaLinodeSlots = typeof __propDef.slots;
export default class FaLinode extends SvelteComponentTyped<FaLinodeProps, FaLinodeEvents, FaLinodeSlots> {
}
export {};

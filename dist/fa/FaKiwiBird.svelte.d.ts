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
export type FaKiwiBirdProps = typeof __propDef.props;
export type FaKiwiBirdEvents = typeof __propDef.events;
export type FaKiwiBirdSlots = typeof __propDef.slots;
export default class FaKiwiBird extends SvelteComponentTyped<FaKiwiBirdProps, FaKiwiBirdEvents, FaKiwiBirdSlots> {
}
export {};

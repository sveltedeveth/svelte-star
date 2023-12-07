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
export type FaMinusProps = typeof __propDef.props;
export type FaMinusEvents = typeof __propDef.events;
export type FaMinusSlots = typeof __propDef.slots;
export default class FaMinus extends SvelteComponentTyped<FaMinusProps, FaMinusEvents, FaMinusSlots> {
}
export {};

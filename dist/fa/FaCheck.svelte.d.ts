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
export type FaCheckProps = typeof __propDef.props;
export type FaCheckEvents = typeof __propDef.events;
export type FaCheckSlots = typeof __propDef.slots;
export default class FaCheck extends SvelteComponentTyped<FaCheckProps, FaCheckEvents, FaCheckSlots> {
}
export {};

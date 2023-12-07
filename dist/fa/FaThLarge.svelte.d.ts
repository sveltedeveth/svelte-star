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
export type FaThLargeProps = typeof __propDef.props;
export type FaThLargeEvents = typeof __propDef.events;
export type FaThLargeSlots = typeof __propDef.slots;
export default class FaThLarge extends SvelteComponentTyped<FaThLargeProps, FaThLargeEvents, FaThLargeSlots> {
}
export {};

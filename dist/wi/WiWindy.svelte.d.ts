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
export type WiWindyProps = typeof __propDef.props;
export type WiWindyEvents = typeof __propDef.events;
export type WiWindySlots = typeof __propDef.slots;
export default class WiWindy extends SvelteComponentTyped<WiWindyProps, WiWindyEvents, WiWindySlots> {
}
export {};

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
export type WiNightClearProps = typeof __propDef.props;
export type WiNightClearEvents = typeof __propDef.events;
export type WiNightClearSlots = typeof __propDef.slots;
export default class WiNightClear extends SvelteComponentTyped<WiNightClearProps, WiNightClearEvents, WiNightClearSlots> {
}
export {};

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
export type WiBarometerProps = typeof __propDef.props;
export type WiBarometerEvents = typeof __propDef.events;
export type WiBarometerSlots = typeof __propDef.slots;
export default class WiBarometer extends SvelteComponentTyped<WiBarometerProps, WiBarometerEvents, WiBarometerSlots> {
}
export {};

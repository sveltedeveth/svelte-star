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
export type WiNaProps = typeof __propDef.props;
export type WiNaEvents = typeof __propDef.events;
export type WiNaSlots = typeof __propDef.slots;
export default class WiNa extends SvelteComponentTyped<WiNaProps, WiNaEvents, WiNaSlots> {
}
export {};

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
export type WiHorizonProps = typeof __propDef.props;
export type WiHorizonEvents = typeof __propDef.events;
export type WiHorizonSlots = typeof __propDef.slots;
export default class WiHorizon extends SvelteComponentTyped<WiHorizonProps, WiHorizonEvents, WiHorizonSlots> {
}
export {};

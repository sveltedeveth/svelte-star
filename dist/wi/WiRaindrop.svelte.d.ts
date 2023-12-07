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
export type WiRaindropProps = typeof __propDef.props;
export type WiRaindropEvents = typeof __propDef.events;
export type WiRaindropSlots = typeof __propDef.slots;
export default class WiRaindrop extends SvelteComponentTyped<WiRaindropProps, WiRaindropEvents, WiRaindropSlots> {
}
export {};

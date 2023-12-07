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
export type WiHailProps = typeof __propDef.props;
export type WiHailEvents = typeof __propDef.events;
export type WiHailSlots = typeof __propDef.slots;
export default class WiHail extends SvelteComponentTyped<WiHailProps, WiHailEvents, WiHailSlots> {
}
export {};

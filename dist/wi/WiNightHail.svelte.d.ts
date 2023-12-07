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
export type WiNightHailProps = typeof __propDef.props;
export type WiNightHailEvents = typeof __propDef.events;
export type WiNightHailSlots = typeof __propDef.slots;
export default class WiNightHail extends SvelteComponentTyped<WiNightHailProps, WiNightHailEvents, WiNightHailSlots> {
}
export {};

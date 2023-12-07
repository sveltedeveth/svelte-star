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
export type WiNightAltHailProps = typeof __propDef.props;
export type WiNightAltHailEvents = typeof __propDef.events;
export type WiNightAltHailSlots = typeof __propDef.slots;
export default class WiNightAltHail extends SvelteComponentTyped<WiNightAltHailProps, WiNightAltHailEvents, WiNightAltHailSlots> {
}
export {};

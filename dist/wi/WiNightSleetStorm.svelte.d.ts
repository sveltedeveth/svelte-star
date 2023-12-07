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
export type WiNightSleetStormProps = typeof __propDef.props;
export type WiNightSleetStormEvents = typeof __propDef.events;
export type WiNightSleetStormSlots = typeof __propDef.slots;
export default class WiNightSleetStorm extends SvelteComponentTyped<WiNightSleetStormProps, WiNightSleetStormEvents, WiNightSleetStormSlots> {
}
export {};

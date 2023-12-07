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
export type WiDaySleetStormProps = typeof __propDef.props;
export type WiDaySleetStormEvents = typeof __propDef.events;
export type WiDaySleetStormSlots = typeof __propDef.slots;
export default class WiDaySleetStorm extends SvelteComponentTyped<WiDaySleetStormProps, WiDaySleetStormEvents, WiDaySleetStormSlots> {
}
export {};

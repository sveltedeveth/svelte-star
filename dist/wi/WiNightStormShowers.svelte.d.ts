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
export type WiNightStormShowersProps = typeof __propDef.props;
export type WiNightStormShowersEvents = typeof __propDef.events;
export type WiNightStormShowersSlots = typeof __propDef.slots;
export default class WiNightStormShowers extends SvelteComponentTyped<WiNightStormShowersProps, WiNightStormShowersEvents, WiNightStormShowersSlots> {
}
export {};

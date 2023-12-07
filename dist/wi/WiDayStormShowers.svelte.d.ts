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
export type WiDayStormShowersProps = typeof __propDef.props;
export type WiDayStormShowersEvents = typeof __propDef.events;
export type WiDayStormShowersSlots = typeof __propDef.slots;
export default class WiDayStormShowers extends SvelteComponentTyped<WiDayStormShowersProps, WiDayStormShowersEvents, WiDayStormShowersSlots> {
}
export {};

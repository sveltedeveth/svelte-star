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
export type WiDayShowersProps = typeof __propDef.props;
export type WiDayShowersEvents = typeof __propDef.events;
export type WiDayShowersSlots = typeof __propDef.slots;
export default class WiDayShowers extends SvelteComponentTyped<WiDayShowersProps, WiDayShowersEvents, WiDayShowersSlots> {
}
export {};

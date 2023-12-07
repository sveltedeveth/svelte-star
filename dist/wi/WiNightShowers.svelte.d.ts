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
export type WiNightShowersProps = typeof __propDef.props;
export type WiNightShowersEvents = typeof __propDef.events;
export type WiNightShowersSlots = typeof __propDef.slots;
export default class WiNightShowers extends SvelteComponentTyped<WiNightShowersProps, WiNightShowersEvents, WiNightShowersSlots> {
}
export {};

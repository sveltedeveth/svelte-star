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
export type WiDayFogProps = typeof __propDef.props;
export type WiDayFogEvents = typeof __propDef.events;
export type WiDayFogSlots = typeof __propDef.slots;
export default class WiDayFog extends SvelteComponentTyped<WiDayFogProps, WiDayFogEvents, WiDayFogSlots> {
}
export {};

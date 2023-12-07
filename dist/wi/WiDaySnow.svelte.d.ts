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
export type WiDaySnowProps = typeof __propDef.props;
export type WiDaySnowEvents = typeof __propDef.events;
export type WiDaySnowSlots = typeof __propDef.slots;
export default class WiDaySnow extends SvelteComponentTyped<WiDaySnowProps, WiDaySnowEvents, WiDaySnowSlots> {
}
export {};

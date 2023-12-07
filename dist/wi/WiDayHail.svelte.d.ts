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
export type WiDayHailProps = typeof __propDef.props;
export type WiDayHailEvents = typeof __propDef.events;
export type WiDayHailSlots = typeof __propDef.slots;
export default class WiDayHail extends SvelteComponentTyped<WiDayHailProps, WiDayHailEvents, WiDayHailSlots> {
}
export {};

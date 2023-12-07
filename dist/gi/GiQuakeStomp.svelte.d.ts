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
export type GiQuakeStompProps = typeof __propDef.props;
export type GiQuakeStompEvents = typeof __propDef.events;
export type GiQuakeStompSlots = typeof __propDef.slots;
export default class GiQuakeStomp extends SvelteComponentTyped<GiQuakeStompProps, GiQuakeStompEvents, GiQuakeStompSlots> {
}
export {};

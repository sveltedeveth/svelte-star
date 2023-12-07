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
export type GiLedProps = typeof __propDef.props;
export type GiLedEvents = typeof __propDef.events;
export type GiLedSlots = typeof __propDef.slots;
export default class GiLed extends SvelteComponentTyped<GiLedProps, GiLedEvents, GiLedSlots> {
}
export {};

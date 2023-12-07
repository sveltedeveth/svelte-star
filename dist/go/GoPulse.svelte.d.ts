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
export type GoPulseProps = typeof __propDef.props;
export type GoPulseEvents = typeof __propDef.events;
export type GoPulseSlots = typeof __propDef.slots;
export default class GoPulse extends SvelteComponentTyped<GoPulseProps, GoPulseEvents, GoPulseSlots> {
}
export {};

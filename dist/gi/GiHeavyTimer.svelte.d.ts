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
export type GiHeavyTimerProps = typeof __propDef.props;
export type GiHeavyTimerEvents = typeof __propDef.events;
export type GiHeavyTimerSlots = typeof __propDef.slots;
export default class GiHeavyTimer extends SvelteComponentTyped<GiHeavyTimerProps, GiHeavyTimerEvents, GiHeavyTimerSlots> {
}
export {};

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
export type GiPulseProps = typeof __propDef.props;
export type GiPulseEvents = typeof __propDef.events;
export type GiPulseSlots = typeof __propDef.slots;
export default class GiPulse extends SvelteComponentTyped<GiPulseProps, GiPulseEvents, GiPulseSlots> {
}
export {};

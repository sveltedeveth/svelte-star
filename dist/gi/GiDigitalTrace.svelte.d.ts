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
export type GiDigitalTraceProps = typeof __propDef.props;
export type GiDigitalTraceEvents = typeof __propDef.events;
export type GiDigitalTraceSlots = typeof __propDef.slots;
export default class GiDigitalTrace extends SvelteComponentTyped<GiDigitalTraceProps, GiDigitalTraceEvents, GiDigitalTraceSlots> {
}
export {};

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
export type GiBrainLeakProps = typeof __propDef.props;
export type GiBrainLeakEvents = typeof __propDef.events;
export type GiBrainLeakSlots = typeof __propDef.slots;
export default class GiBrainLeak extends SvelteComponentTyped<GiBrainLeakProps, GiBrainLeakEvents, GiBrainLeakSlots> {
}
export {};

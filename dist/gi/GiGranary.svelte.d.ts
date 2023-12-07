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
export type GiGranaryProps = typeof __propDef.props;
export type GiGranaryEvents = typeof __propDef.events;
export type GiGranarySlots = typeof __propDef.slots;
export default class GiGranary extends SvelteComponentTyped<GiGranaryProps, GiGranaryEvents, GiGranarySlots> {
}
export {};

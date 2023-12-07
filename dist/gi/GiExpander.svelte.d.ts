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
export type GiExpanderProps = typeof __propDef.props;
export type GiExpanderEvents = typeof __propDef.events;
export type GiExpanderSlots = typeof __propDef.slots;
export default class GiExpander extends SvelteComponentTyped<GiExpanderProps, GiExpanderEvents, GiExpanderSlots> {
}
export {};

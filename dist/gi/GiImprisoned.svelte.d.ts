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
export type GiImprisonedProps = typeof __propDef.props;
export type GiImprisonedEvents = typeof __propDef.events;
export type GiImprisonedSlots = typeof __propDef.slots;
export default class GiImprisoned extends SvelteComponentTyped<GiImprisonedProps, GiImprisonedEvents, GiImprisonedSlots> {
}
export {};

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
export type GiInfinityProps = typeof __propDef.props;
export type GiInfinityEvents = typeof __propDef.events;
export type GiInfinitySlots = typeof __propDef.slots;
export default class GiInfinity extends SvelteComponentTyped<GiInfinityProps, GiInfinityEvents, GiInfinitySlots> {
}
export {};

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
export type GiDeathcabProps = typeof __propDef.props;
export type GiDeathcabEvents = typeof __propDef.events;
export type GiDeathcabSlots = typeof __propDef.slots;
export default class GiDeathcab extends SvelteComponentTyped<GiDeathcabProps, GiDeathcabEvents, GiDeathcabSlots> {
}
export {};

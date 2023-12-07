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
export type GiIceSpellCastProps = typeof __propDef.props;
export type GiIceSpellCastEvents = typeof __propDef.events;
export type GiIceSpellCastSlots = typeof __propDef.slots;
export default class GiIceSpellCast extends SvelteComponentTyped<GiIceSpellCastProps, GiIceSpellCastEvents, GiIceSpellCastSlots> {
}
export {};

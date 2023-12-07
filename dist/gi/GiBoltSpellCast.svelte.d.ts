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
export type GiBoltSpellCastProps = typeof __propDef.props;
export type GiBoltSpellCastEvents = typeof __propDef.events;
export type GiBoltSpellCastSlots = typeof __propDef.slots;
export default class GiBoltSpellCast extends SvelteComponentTyped<GiBoltSpellCastProps, GiBoltSpellCastEvents, GiBoltSpellCastSlots> {
}
export {};

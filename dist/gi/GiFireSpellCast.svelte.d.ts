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
export type GiFireSpellCastProps = typeof __propDef.props;
export type GiFireSpellCastEvents = typeof __propDef.events;
export type GiFireSpellCastSlots = typeof __propDef.slots;
export default class GiFireSpellCast extends SvelteComponentTyped<GiFireSpellCastProps, GiFireSpellCastEvents, GiFireSpellCastSlots> {
}
export {};

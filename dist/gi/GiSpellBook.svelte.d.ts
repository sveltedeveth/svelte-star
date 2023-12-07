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
export type GiSpellBookProps = typeof __propDef.props;
export type GiSpellBookEvents = typeof __propDef.events;
export type GiSpellBookSlots = typeof __propDef.slots;
export default class GiSpellBook extends SvelteComponentTyped<GiSpellBookProps, GiSpellBookEvents, GiSpellBookSlots> {
}
export {};

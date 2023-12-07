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
export type GiMusicSpellProps = typeof __propDef.props;
export type GiMusicSpellEvents = typeof __propDef.events;
export type GiMusicSpellSlots = typeof __propDef.slots;
export default class GiMusicSpell extends SvelteComponentTyped<GiMusicSpellProps, GiMusicSpellEvents, GiMusicSpellSlots> {
}
export {};

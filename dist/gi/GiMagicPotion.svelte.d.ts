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
export type GiMagicPotionProps = typeof __propDef.props;
export type GiMagicPotionEvents = typeof __propDef.events;
export type GiMagicPotionSlots = typeof __propDef.slots;
export default class GiMagicPotion extends SvelteComponentTyped<GiMagicPotionProps, GiMagicPotionEvents, GiMagicPotionSlots> {
}
export {};

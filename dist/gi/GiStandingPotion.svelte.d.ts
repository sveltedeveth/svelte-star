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
export type GiStandingPotionProps = typeof __propDef.props;
export type GiStandingPotionEvents = typeof __propDef.events;
export type GiStandingPotionSlots = typeof __propDef.slots;
export default class GiStandingPotion extends SvelteComponentTyped<GiStandingPotionProps, GiStandingPotionEvents, GiStandingPotionSlots> {
}
export {};

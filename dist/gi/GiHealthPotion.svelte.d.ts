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
export type GiHealthPotionProps = typeof __propDef.props;
export type GiHealthPotionEvents = typeof __propDef.events;
export type GiHealthPotionSlots = typeof __propDef.slots;
export default class GiHealthPotion extends SvelteComponentTyped<GiHealthPotionProps, GiHealthPotionEvents, GiHealthPotionSlots> {
}
export {};

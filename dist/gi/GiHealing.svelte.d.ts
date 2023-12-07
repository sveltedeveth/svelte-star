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
export type GiHealingProps = typeof __propDef.props;
export type GiHealingEvents = typeof __propDef.events;
export type GiHealingSlots = typeof __propDef.slots;
export default class GiHealing extends SvelteComponentTyped<GiHealingProps, GiHealingEvents, GiHealingSlots> {
}
export {};

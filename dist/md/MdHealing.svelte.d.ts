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
export type MdHealingProps = typeof __propDef.props;
export type MdHealingEvents = typeof __propDef.events;
export type MdHealingSlots = typeof __propDef.slots;
export default class MdHealing extends SvelteComponentTyped<MdHealingProps, MdHealingEvents, MdHealingSlots> {
}
export {};

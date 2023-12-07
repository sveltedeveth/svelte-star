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
export type FaPrayingHandsProps = typeof __propDef.props;
export type FaPrayingHandsEvents = typeof __propDef.events;
export type FaPrayingHandsSlots = typeof __propDef.slots;
export default class FaPrayingHands extends SvelteComponentTyped<FaPrayingHandsProps, FaPrayingHandsEvents, FaPrayingHandsSlots> {
}
export {};

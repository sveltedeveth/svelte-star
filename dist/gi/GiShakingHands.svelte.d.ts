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
export type GiShakingHandsProps = typeof __propDef.props;
export type GiShakingHandsEvents = typeof __propDef.events;
export type GiShakingHandsSlots = typeof __propDef.slots;
export default class GiShakingHands extends SvelteComponentTyped<GiShakingHandsProps, GiShakingHandsEvents, GiShakingHandsSlots> {
}
export {};

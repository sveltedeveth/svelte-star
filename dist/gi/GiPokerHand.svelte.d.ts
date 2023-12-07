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
export type GiPokerHandProps = typeof __propDef.props;
export type GiPokerHandEvents = typeof __propDef.events;
export type GiPokerHandSlots = typeof __propDef.slots;
export default class GiPokerHand extends SvelteComponentTyped<GiPokerHandProps, GiPokerHandEvents, GiPokerHandSlots> {
}
export {};

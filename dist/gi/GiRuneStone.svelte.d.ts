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
export type GiRuneStoneProps = typeof __propDef.props;
export type GiRuneStoneEvents = typeof __propDef.events;
export type GiRuneStoneSlots = typeof __propDef.slots;
export default class GiRuneStone extends SvelteComponentTyped<GiRuneStoneProps, GiRuneStoneEvents, GiRuneStoneSlots> {
}
export {};

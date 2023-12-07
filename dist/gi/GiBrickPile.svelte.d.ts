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
export type GiBrickPileProps = typeof __propDef.props;
export type GiBrickPileEvents = typeof __propDef.events;
export type GiBrickPileSlots = typeof __propDef.slots;
export default class GiBrickPile extends SvelteComponentTyped<GiBrickPileProps, GiBrickPileEvents, GiBrickPileSlots> {
}
export {};

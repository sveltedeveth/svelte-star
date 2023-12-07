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
export type GiBookPileProps = typeof __propDef.props;
export type GiBookPileEvents = typeof __propDef.events;
export type GiBookPileSlots = typeof __propDef.slots;
export default class GiBookPile extends SvelteComponentTyped<GiBookPileProps, GiBookPileEvents, GiBookPileSlots> {
}
export {};

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
export type GiWoodPileProps = typeof __propDef.props;
export type GiWoodPileEvents = typeof __propDef.events;
export type GiWoodPileSlots = typeof __propDef.slots;
export default class GiWoodPile extends SvelteComponentTyped<GiWoodPileProps, GiWoodPileEvents, GiWoodPileSlots> {
}
export {};

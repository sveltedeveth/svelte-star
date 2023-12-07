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
export type TiArrowShuffleProps = typeof __propDef.props;
export type TiArrowShuffleEvents = typeof __propDef.events;
export type TiArrowShuffleSlots = typeof __propDef.slots;
export default class TiArrowShuffle extends SvelteComponentTyped<TiArrowShuffleProps, TiArrowShuffleEvents, TiArrowShuffleSlots> {
}
export {};

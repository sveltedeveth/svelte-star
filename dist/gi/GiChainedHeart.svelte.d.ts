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
export type GiChainedHeartProps = typeof __propDef.props;
export type GiChainedHeartEvents = typeof __propDef.events;
export type GiChainedHeartSlots = typeof __propDef.slots;
export default class GiChainedHeart extends SvelteComponentTyped<GiChainedHeartProps, GiChainedHeartEvents, GiChainedHeartSlots> {
}
export {};

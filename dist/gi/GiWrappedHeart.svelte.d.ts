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
export type GiWrappedHeartProps = typeof __propDef.props;
export type GiWrappedHeartEvents = typeof __propDef.events;
export type GiWrappedHeartSlots = typeof __propDef.slots;
export default class GiWrappedHeart extends SvelteComponentTyped<GiWrappedHeartProps, GiWrappedHeartEvents, GiWrappedHeartSlots> {
}
export {};

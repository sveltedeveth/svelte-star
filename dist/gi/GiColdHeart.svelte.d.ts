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
export type GiColdHeartProps = typeof __propDef.props;
export type GiColdHeartEvents = typeof __propDef.events;
export type GiColdHeartSlots = typeof __propDef.slots;
export default class GiColdHeart extends SvelteComponentTyped<GiColdHeartProps, GiColdHeartEvents, GiColdHeartSlots> {
}
export {};

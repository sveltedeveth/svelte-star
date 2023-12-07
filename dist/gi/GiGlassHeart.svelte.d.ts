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
export type GiGlassHeartProps = typeof __propDef.props;
export type GiGlassHeartEvents = typeof __propDef.events;
export type GiGlassHeartSlots = typeof __propDef.slots;
export default class GiGlassHeart extends SvelteComponentTyped<GiGlassHeartProps, GiGlassHeartEvents, GiGlassHeartSlots> {
}
export {};

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
export type GiPiercedHeartProps = typeof __propDef.props;
export type GiPiercedHeartEvents = typeof __propDef.events;
export type GiPiercedHeartSlots = typeof __propDef.slots;
export default class GiPiercedHeart extends SvelteComponentTyped<GiPiercedHeartProps, GiPiercedHeartEvents, GiPiercedHeartSlots> {
}
export {};

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
export type GiDiamondRingProps = typeof __propDef.props;
export type GiDiamondRingEvents = typeof __propDef.events;
export type GiDiamondRingSlots = typeof __propDef.slots;
export default class GiDiamondRing extends SvelteComponentTyped<GiDiamondRingProps, GiDiamondRingEvents, GiDiamondRingSlots> {
}
export {};

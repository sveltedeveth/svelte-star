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
export type GiCutDiamondProps = typeof __propDef.props;
export type GiCutDiamondEvents = typeof __propDef.events;
export type GiCutDiamondSlots = typeof __propDef.slots;
export default class GiCutDiamond extends SvelteComponentTyped<GiCutDiamondProps, GiCutDiamondEvents, GiCutDiamondSlots> {
}
export {};

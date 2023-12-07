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
export type GiDividedSpiralProps = typeof __propDef.props;
export type GiDividedSpiralEvents = typeof __propDef.events;
export type GiDividedSpiralSlots = typeof __propDef.slots;
export default class GiDividedSpiral extends SvelteComponentTyped<GiDividedSpiralProps, GiDividedSpiralEvents, GiDividedSpiralSlots> {
}
export {};

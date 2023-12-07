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
export type GiCrossbowProps = typeof __propDef.props;
export type GiCrossbowEvents = typeof __propDef.events;
export type GiCrossbowSlots = typeof __propDef.slots;
export default class GiCrossbow extends SvelteComponentTyped<GiCrossbowProps, GiCrossbowEvents, GiCrossbowSlots> {
}
export {};

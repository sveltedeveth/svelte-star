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
export type GiCrushProps = typeof __propDef.props;
export type GiCrushEvents = typeof __propDef.events;
export type GiCrushSlots = typeof __propDef.slots;
export default class GiCrush extends SvelteComponentTyped<GiCrushProps, GiCrushEvents, GiCrushSlots> {
}
export {};

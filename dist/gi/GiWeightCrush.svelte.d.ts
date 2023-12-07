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
export type GiWeightCrushProps = typeof __propDef.props;
export type GiWeightCrushEvents = typeof __propDef.events;
export type GiWeightCrushSlots = typeof __propDef.slots;
export default class GiWeightCrush extends SvelteComponentTyped<GiWeightCrushProps, GiWeightCrushEvents, GiWeightCrushSlots> {
}
export {};

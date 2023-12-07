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
export type GiLargePaintBrushProps = typeof __propDef.props;
export type GiLargePaintBrushEvents = typeof __propDef.events;
export type GiLargePaintBrushSlots = typeof __propDef.slots;
export default class GiLargePaintBrush extends SvelteComponentTyped<GiLargePaintBrushProps, GiLargePaintBrushEvents, GiLargePaintBrushSlots> {
}
export {};

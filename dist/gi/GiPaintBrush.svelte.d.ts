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
export type GiPaintBrushProps = typeof __propDef.props;
export type GiPaintBrushEvents = typeof __propDef.events;
export type GiPaintBrushSlots = typeof __propDef.slots;
export default class GiPaintBrush extends SvelteComponentTyped<GiPaintBrushProps, GiPaintBrushEvents, GiPaintBrushSlots> {
}
export {};

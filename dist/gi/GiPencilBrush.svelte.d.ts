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
export type GiPencilBrushProps = typeof __propDef.props;
export type GiPencilBrushEvents = typeof __propDef.events;
export type GiPencilBrushSlots = typeof __propDef.slots;
export default class GiPencilBrush extends SvelteComponentTyped<GiPencilBrushProps, GiPencilBrushEvents, GiPencilBrushSlots> {
}
export {};

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
export type IoMdBrushProps = typeof __propDef.props;
export type IoMdBrushEvents = typeof __propDef.events;
export type IoMdBrushSlots = typeof __propDef.slots;
export default class IoMdBrush extends SvelteComponentTyped<IoMdBrushProps, IoMdBrushEvents, IoMdBrushSlots> {
}
export {};

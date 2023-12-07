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
export type MdBrushProps = typeof __propDef.props;
export type MdBrushEvents = typeof __propDef.events;
export type MdBrushSlots = typeof __propDef.slots;
export default class MdBrush extends SvelteComponentTyped<MdBrushProps, MdBrushEvents, MdBrushSlots> {
}
export {};

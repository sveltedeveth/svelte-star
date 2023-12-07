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
export type FaPaintBrushProps = typeof __propDef.props;
export type FaPaintBrushEvents = typeof __propDef.events;
export type FaPaintBrushSlots = typeof __propDef.slots;
export default class FaPaintBrush extends SvelteComponentTyped<FaPaintBrushProps, FaPaintBrushEvents, FaPaintBrushSlots> {
}
export {};

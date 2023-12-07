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
export type TiBrushProps = typeof __propDef.props;
export type TiBrushEvents = typeof __propDef.events;
export type TiBrushSlots = typeof __propDef.slots;
export default class TiBrush extends SvelteComponentTyped<TiBrushProps, TiBrushEvents, TiBrushSlots> {
}
export {};

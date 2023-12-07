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
export type GiBladeDragProps = typeof __propDef.props;
export type GiBladeDragEvents = typeof __propDef.events;
export type GiBladeDragSlots = typeof __propDef.slots;
export default class GiBladeDrag extends SvelteComponentTyped<GiBladeDragProps, GiBladeDragEvents, GiBladeDragSlots> {
}
export {};

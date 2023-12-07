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
export type GiDragonflyProps = typeof __propDef.props;
export type GiDragonflyEvents = typeof __propDef.events;
export type GiDragonflySlots = typeof __propDef.slots;
export default class GiDragonfly extends SvelteComponentTyped<GiDragonflyProps, GiDragonflyEvents, GiDragonflySlots> {
}
export {};

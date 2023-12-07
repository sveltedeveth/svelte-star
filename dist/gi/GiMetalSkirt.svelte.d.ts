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
export type GiMetalSkirtProps = typeof __propDef.props;
export type GiMetalSkirtEvents = typeof __propDef.events;
export type GiMetalSkirtSlots = typeof __propDef.slots;
export default class GiMetalSkirt extends SvelteComponentTyped<GiMetalSkirtProps, GiMetalSkirtEvents, GiMetalSkirtSlots> {
}
export {};

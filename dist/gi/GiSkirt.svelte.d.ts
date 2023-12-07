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
export type GiSkirtProps = typeof __propDef.props;
export type GiSkirtEvents = typeof __propDef.events;
export type GiSkirtSlots = typeof __propDef.slots;
export default class GiSkirt extends SvelteComponentTyped<GiSkirtProps, GiSkirtEvents, GiSkirtSlots> {
}
export {};

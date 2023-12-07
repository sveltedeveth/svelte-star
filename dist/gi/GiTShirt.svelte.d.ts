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
export type GiTShirtProps = typeof __propDef.props;
export type GiTShirtEvents = typeof __propDef.events;
export type GiTShirtSlots = typeof __propDef.slots;
export default class GiTShirt extends SvelteComponentTyped<GiTShirtProps, GiTShirtEvents, GiTShirtSlots> {
}
export {};

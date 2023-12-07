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
export type GiShirtProps = typeof __propDef.props;
export type GiShirtEvents = typeof __propDef.events;
export type GiShirtSlots = typeof __propDef.slots;
export default class GiShirt extends SvelteComponentTyped<GiShirtProps, GiShirtEvents, GiShirtSlots> {
}
export {};

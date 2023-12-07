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
export type GiMailShirtProps = typeof __propDef.props;
export type GiMailShirtEvents = typeof __propDef.events;
export type GiMailShirtSlots = typeof __propDef.slots;
export default class GiMailShirt extends SvelteComponentTyped<GiMailShirtProps, GiMailShirtEvents, GiMailShirtSlots> {
}
export {};

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
export type GiFurShirtProps = typeof __propDef.props;
export type GiFurShirtEvents = typeof __propDef.events;
export type GiFurShirtSlots = typeof __propDef.slots;
export default class GiFurShirt extends SvelteComponentTyped<GiFurShirtProps, GiFurShirtEvents, GiFurShirtSlots> {
}
export {};

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
export type GiPoloShirtProps = typeof __propDef.props;
export type GiPoloShirtEvents = typeof __propDef.events;
export type GiPoloShirtSlots = typeof __propDef.slots;
export default class GiPoloShirt extends SvelteComponentTyped<GiPoloShirtProps, GiPoloShirtEvents, GiPoloShirtSlots> {
}
export {};

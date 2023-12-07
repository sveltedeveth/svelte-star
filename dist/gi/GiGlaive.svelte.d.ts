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
export type GiGlaiveProps = typeof __propDef.props;
export type GiGlaiveEvents = typeof __propDef.events;
export type GiGlaiveSlots = typeof __propDef.slots;
export default class GiGlaive extends SvelteComponentTyped<GiGlaiveProps, GiGlaiveEvents, GiGlaiveSlots> {
}
export {};

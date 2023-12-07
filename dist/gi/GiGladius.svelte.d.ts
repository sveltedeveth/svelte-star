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
export type GiGladiusProps = typeof __propDef.props;
export type GiGladiusEvents = typeof __propDef.events;
export type GiGladiusSlots = typeof __propDef.slots;
export default class GiGladius extends SvelteComponentTyped<GiGladiusProps, GiGladiusEvents, GiGladiusSlots> {
}
export {};

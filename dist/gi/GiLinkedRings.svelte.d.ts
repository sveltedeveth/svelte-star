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
export type GiLinkedRingsProps = typeof __propDef.props;
export type GiLinkedRingsEvents = typeof __propDef.events;
export type GiLinkedRingsSlots = typeof __propDef.slots;
export default class GiLinkedRings extends SvelteComponentTyped<GiLinkedRingsProps, GiLinkedRingsEvents, GiLinkedRingsSlots> {
}
export {};

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
export type GiMinefieldProps = typeof __propDef.props;
export type GiMinefieldEvents = typeof __propDef.events;
export type GiMinefieldSlots = typeof __propDef.slots;
export default class GiMinefield extends SvelteComponentTyped<GiMinefieldProps, GiMinefieldEvents, GiMinefieldSlots> {
}
export {};

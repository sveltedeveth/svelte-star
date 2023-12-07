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
export type GiCrackedSaberProps = typeof __propDef.props;
export type GiCrackedSaberEvents = typeof __propDef.events;
export type GiCrackedSaberSlots = typeof __propDef.slots;
export default class GiCrackedSaber extends SvelteComponentTyped<GiCrackedSaberProps, GiCrackedSaberEvents, GiCrackedSaberSlots> {
}
export {};

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
export type GiCrackedGlassProps = typeof __propDef.props;
export type GiCrackedGlassEvents = typeof __propDef.events;
export type GiCrackedGlassSlots = typeof __propDef.slots;
export default class GiCrackedGlass extends SvelteComponentTyped<GiCrackedGlassProps, GiCrackedGlassEvents, GiCrackedGlassSlots> {
}
export {};

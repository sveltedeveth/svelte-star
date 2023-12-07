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
export type GiCavemanProps = typeof __propDef.props;
export type GiCavemanEvents = typeof __propDef.events;
export type GiCavemanSlots = typeof __propDef.slots;
export default class GiCaveman extends SvelteComponentTyped<GiCavemanProps, GiCavemanEvents, GiCavemanSlots> {
}
export {};

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
export type GiIslandProps = typeof __propDef.props;
export type GiIslandEvents = typeof __propDef.events;
export type GiIslandSlots = typeof __propDef.slots;
export default class GiIsland extends SvelteComponentTyped<GiIslandProps, GiIslandEvents, GiIslandSlots> {
}
export {};

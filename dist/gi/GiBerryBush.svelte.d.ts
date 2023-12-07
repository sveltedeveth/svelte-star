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
export type GiBerryBushProps = typeof __propDef.props;
export type GiBerryBushEvents = typeof __propDef.events;
export type GiBerryBushSlots = typeof __propDef.slots;
export default class GiBerryBush extends SvelteComponentTyped<GiBerryBushProps, GiBerryBushEvents, GiBerryBushSlots> {
}
export {};

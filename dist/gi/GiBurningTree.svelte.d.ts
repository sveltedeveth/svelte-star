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
export type GiBurningTreeProps = typeof __propDef.props;
export type GiBurningTreeEvents = typeof __propDef.events;
export type GiBurningTreeSlots = typeof __propDef.slots;
export default class GiBurningTree extends SvelteComponentTyped<GiBurningTreeProps, GiBurningTreeEvents, GiBurningTreeSlots> {
}
export {};

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
export type FaDungeonProps = typeof __propDef.props;
export type FaDungeonEvents = typeof __propDef.events;
export type FaDungeonSlots = typeof __propDef.slots;
export default class FaDungeon extends SvelteComponentTyped<FaDungeonProps, FaDungeonEvents, FaDungeonSlots> {
}
export {};

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
export type MdRecentActorsProps = typeof __propDef.props;
export type MdRecentActorsEvents = typeof __propDef.events;
export type MdRecentActorsSlots = typeof __propDef.slots;
export default class MdRecentActors extends SvelteComponentTyped<MdRecentActorsProps, MdRecentActorsEvents, MdRecentActorsSlots> {
}
export {};

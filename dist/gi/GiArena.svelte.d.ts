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
export type GiArenaProps = typeof __propDef.props;
export type GiArenaEvents = typeof __propDef.events;
export type GiArenaSlots = typeof __propDef.slots;
export default class GiArena extends SvelteComponentTyped<GiArenaProps, GiArenaEvents, GiArenaSlots> {
}
export {};

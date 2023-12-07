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
export type GiCaveEntranceProps = typeof __propDef.props;
export type GiCaveEntranceEvents = typeof __propDef.events;
export type GiCaveEntranceSlots = typeof __propDef.slots;
export default class GiCaveEntrance extends SvelteComponentTyped<GiCaveEntranceProps, GiCaveEntranceEvents, GiCaveEntranceSlots> {
}
export {};

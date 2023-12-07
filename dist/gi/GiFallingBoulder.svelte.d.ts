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
export type GiFallingBoulderProps = typeof __propDef.props;
export type GiFallingBoulderEvents = typeof __propDef.events;
export type GiFallingBoulderSlots = typeof __propDef.slots;
export default class GiFallingBoulder extends SvelteComponentTyped<GiFallingBoulderProps, GiFallingBoulderEvents, GiFallingBoulderSlots> {
}
export {};

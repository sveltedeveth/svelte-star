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
export type GiSeaCreatureProps = typeof __propDef.props;
export type GiSeaCreatureEvents = typeof __propDef.events;
export type GiSeaCreatureSlots = typeof __propDef.slots;
export default class GiSeaCreature extends SvelteComponentTyped<GiSeaCreatureProps, GiSeaCreatureEvents, GiSeaCreatureSlots> {
}
export {};

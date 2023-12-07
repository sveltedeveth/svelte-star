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
export type GiTreasureMapProps = typeof __propDef.props;
export type GiTreasureMapEvents = typeof __propDef.events;
export type GiTreasureMapSlots = typeof __propDef.slots;
export default class GiTreasureMap extends SvelteComponentTyped<GiTreasureMapProps, GiTreasureMapEvents, GiTreasureMapSlots> {
}
export {};

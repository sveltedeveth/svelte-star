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
export type GiLandMineProps = typeof __propDef.props;
export type GiLandMineEvents = typeof __propDef.events;
export type GiLandMineSlots = typeof __propDef.slots;
export default class GiLandMine extends SvelteComponentTyped<GiLandMineProps, GiLandMineEvents, GiLandMineSlots> {
}
export {};

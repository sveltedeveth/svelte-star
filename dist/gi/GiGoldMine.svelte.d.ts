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
export type GiGoldMineProps = typeof __propDef.props;
export type GiGoldMineEvents = typeof __propDef.events;
export type GiGoldMineSlots = typeof __propDef.slots;
export default class GiGoldMine extends SvelteComponentTyped<GiGoldMineProps, GiGoldMineEvents, GiGoldMineSlots> {
}
export {};

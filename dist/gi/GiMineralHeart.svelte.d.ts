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
export type GiMineralHeartProps = typeof __propDef.props;
export type GiMineralHeartEvents = typeof __propDef.events;
export type GiMineralHeartSlots = typeof __propDef.slots;
export default class GiMineralHeart extends SvelteComponentTyped<GiMineralHeartProps, GiMineralHeartEvents, GiMineralHeartSlots> {
}
export {};

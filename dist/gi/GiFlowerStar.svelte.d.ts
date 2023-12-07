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
export type GiFlowerStarProps = typeof __propDef.props;
export type GiFlowerStarEvents = typeof __propDef.events;
export type GiFlowerStarSlots = typeof __propDef.slots;
export default class GiFlowerStar extends SvelteComponentTyped<GiFlowerStarProps, GiFlowerStarEvents, GiFlowerStarSlots> {
}
export {};

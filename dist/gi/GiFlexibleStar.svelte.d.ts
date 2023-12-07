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
export type GiFlexibleStarProps = typeof __propDef.props;
export type GiFlexibleStarEvents = typeof __propDef.events;
export type GiFlexibleStarSlots = typeof __propDef.slots;
export default class GiFlexibleStar extends SvelteComponentTyped<GiFlexibleStarProps, GiFlexibleStarEvents, GiFlexibleStarSlots> {
}
export {};

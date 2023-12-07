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
export type GiRainbowStarProps = typeof __propDef.props;
export type GiRainbowStarEvents = typeof __propDef.events;
export type GiRainbowStarSlots = typeof __propDef.slots;
export default class GiRainbowStar extends SvelteComponentTyped<GiRainbowStarProps, GiRainbowStarEvents, GiRainbowStarSlots> {
}
export {};

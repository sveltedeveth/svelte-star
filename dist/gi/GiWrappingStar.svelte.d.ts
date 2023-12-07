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
export type GiWrappingStarProps = typeof __propDef.props;
export type GiWrappingStarEvents = typeof __propDef.events;
export type GiWrappingStarSlots = typeof __propDef.slots;
export default class GiWrappingStar extends SvelteComponentTyped<GiWrappingStarProps, GiWrappingStarEvents, GiWrappingStarSlots> {
}
export {};

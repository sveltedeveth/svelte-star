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
export type GiAlliedStarProps = typeof __propDef.props;
export type GiAlliedStarEvents = typeof __propDef.events;
export type GiAlliedStarSlots = typeof __propDef.slots;
export default class GiAlliedStar extends SvelteComponentTyped<GiAlliedStarProps, GiAlliedStarEvents, GiAlliedStarSlots> {
}
export {};

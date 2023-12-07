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
export type GiLawStarProps = typeof __propDef.props;
export type GiLawStarEvents = typeof __propDef.events;
export type GiLawStarSlots = typeof __propDef.slots;
export default class GiLawStar extends SvelteComponentTyped<GiLawStarProps, GiLawStarEvents, GiLawStarSlots> {
}
export {};

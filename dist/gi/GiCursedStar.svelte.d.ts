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
export type GiCursedStarProps = typeof __propDef.props;
export type GiCursedStarEvents = typeof __propDef.events;
export type GiCursedStarSlots = typeof __propDef.slots;
export default class GiCursedStar extends SvelteComponentTyped<GiCursedStarProps, GiCursedStarEvents, GiCursedStarSlots> {
}
export {};

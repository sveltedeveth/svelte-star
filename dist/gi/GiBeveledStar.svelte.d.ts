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
export type GiBeveledStarProps = typeof __propDef.props;
export type GiBeveledStarEvents = typeof __propDef.events;
export type GiBeveledStarSlots = typeof __propDef.slots;
export default class GiBeveledStar extends SvelteComponentTyped<GiBeveledStarProps, GiBeveledStarEvents, GiBeveledStarSlots> {
}
export {};

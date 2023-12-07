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
export type GiRoundStarProps = typeof __propDef.props;
export type GiRoundStarEvents = typeof __propDef.events;
export type GiRoundStarSlots = typeof __propDef.slots;
export default class GiRoundStar extends SvelteComponentTyped<GiRoundStarProps, GiRoundStarEvents, GiRoundStarSlots> {
}
export {};

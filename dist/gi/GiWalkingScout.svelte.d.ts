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
export type GiWalkingScoutProps = typeof __propDef.props;
export type GiWalkingScoutEvents = typeof __propDef.events;
export type GiWalkingScoutSlots = typeof __propDef.slots;
export default class GiWalkingScout extends SvelteComponentTyped<GiWalkingScoutProps, GiWalkingScoutEvents, GiWalkingScoutSlots> {
}
export {};

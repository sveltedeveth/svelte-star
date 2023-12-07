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
export type GiGroundSproutProps = typeof __propDef.props;
export type GiGroundSproutEvents = typeof __propDef.events;
export type GiGroundSproutSlots = typeof __propDef.slots;
export default class GiGroundSprout extends SvelteComponentTyped<GiGroundSproutProps, GiGroundSproutEvents, GiGroundSproutSlots> {
}
export {};

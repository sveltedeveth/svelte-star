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
export type GiTargetingProps = typeof __propDef.props;
export type GiTargetingEvents = typeof __propDef.events;
export type GiTargetingSlots = typeof __propDef.slots;
export default class GiTargeting extends SvelteComponentTyped<GiTargetingProps, GiTargetingEvents, GiTargetingSlots> {
}
export {};

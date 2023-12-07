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
export type GiCelebrationFireProps = typeof __propDef.props;
export type GiCelebrationFireEvents = typeof __propDef.events;
export type GiCelebrationFireSlots = typeof __propDef.slots;
export default class GiCelebrationFire extends SvelteComponentTyped<GiCelebrationFireProps, GiCelebrationFireEvents, GiCelebrationFireSlots> {
}
export {};

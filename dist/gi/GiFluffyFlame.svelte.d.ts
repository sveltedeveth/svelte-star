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
export type GiFluffyFlameProps = typeof __propDef.props;
export type GiFluffyFlameEvents = typeof __propDef.events;
export type GiFluffyFlameSlots = typeof __propDef.slots;
export default class GiFluffyFlame extends SvelteComponentTyped<GiFluffyFlameProps, GiFluffyFlameEvents, GiFluffyFlameSlots> {
}
export {};

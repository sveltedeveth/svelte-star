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
export type GiFlameProps = typeof __propDef.props;
export type GiFlameEvents = typeof __propDef.events;
export type GiFlameSlots = typeof __propDef.slots;
export default class GiFlame extends SvelteComponentTyped<GiFlameProps, GiFlameEvents, GiFlameSlots> {
}
export {};

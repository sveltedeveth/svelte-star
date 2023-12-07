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
export type GiLanternFlameProps = typeof __propDef.props;
export type GiLanternFlameEvents = typeof __propDef.events;
export type GiLanternFlameSlots = typeof __propDef.slots;
export default class GiLanternFlame extends SvelteComponentTyped<GiLanternFlameProps, GiLanternFlameEvents, GiLanternFlameSlots> {
}
export {};

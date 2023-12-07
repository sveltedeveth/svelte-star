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
export type GiOrbitalProps = typeof __propDef.props;
export type GiOrbitalEvents = typeof __propDef.events;
export type GiOrbitalSlots = typeof __propDef.slots;
export default class GiOrbital extends SvelteComponentTyped<GiOrbitalProps, GiOrbitalEvents, GiOrbitalSlots> {
}
export {};

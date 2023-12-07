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
export type GiOrbWandProps = typeof __propDef.props;
export type GiOrbWandEvents = typeof __propDef.events;
export type GiOrbWandSlots = typeof __propDef.slots;
export default class GiOrbWand extends SvelteComponentTyped<GiOrbWandProps, GiOrbWandEvents, GiOrbWandSlots> {
}
export {};

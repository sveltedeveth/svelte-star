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
export type GiPlanetCoreProps = typeof __propDef.props;
export type GiPlanetCoreEvents = typeof __propDef.events;
export type GiPlanetCoreSlots = typeof __propDef.slots;
export default class GiPlanetCore extends SvelteComponentTyped<GiPlanetCoreProps, GiPlanetCoreEvents, GiPlanetCoreSlots> {
}
export {};

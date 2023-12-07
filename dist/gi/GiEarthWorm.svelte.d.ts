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
export type GiEarthWormProps = typeof __propDef.props;
export type GiEarthWormEvents = typeof __propDef.events;
export type GiEarthWormSlots = typeof __propDef.slots;
export default class GiEarthWorm extends SvelteComponentTyped<GiEarthWormProps, GiEarthWormEvents, GiEarthWormSlots> {
}
export {};

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
export type GiSolarSystemProps = typeof __propDef.props;
export type GiSolarSystemEvents = typeof __propDef.events;
export type GiSolarSystemSlots = typeof __propDef.slots;
export default class GiSolarSystem extends SvelteComponentTyped<GiSolarSystemProps, GiSolarSystemEvents, GiSolarSystemSlots> {
}
export {};

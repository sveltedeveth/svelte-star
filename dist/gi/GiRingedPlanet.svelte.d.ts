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
export type GiRingedPlanetProps = typeof __propDef.props;
export type GiRingedPlanetEvents = typeof __propDef.events;
export type GiRingedPlanetSlots = typeof __propDef.slots;
export default class GiRingedPlanet extends SvelteComponentTyped<GiRingedPlanetProps, GiRingedPlanetEvents, GiRingedPlanetSlots> {
}
export {};

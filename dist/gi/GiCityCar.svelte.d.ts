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
export type GiCityCarProps = typeof __propDef.props;
export type GiCityCarEvents = typeof __propDef.events;
export type GiCityCarSlots = typeof __propDef.slots;
export default class GiCityCar extends SvelteComponentTyped<GiCityCarProps, GiCityCarEvents, GiCityCarSlots> {
}
export {};

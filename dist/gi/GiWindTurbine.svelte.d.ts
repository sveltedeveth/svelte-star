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
export type GiWindTurbineProps = typeof __propDef.props;
export type GiWindTurbineEvents = typeof __propDef.events;
export type GiWindTurbineSlots = typeof __propDef.slots;
export default class GiWindTurbine extends SvelteComponentTyped<GiWindTurbineProps, GiWindTurbineEvents, GiWindTurbineSlots> {
}
export {};

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
export type GiTurbineProps = typeof __propDef.props;
export type GiTurbineEvents = typeof __propDef.events;
export type GiTurbineSlots = typeof __propDef.slots;
export default class GiTurbine extends SvelteComponentTyped<GiTurbineProps, GiTurbineEvents, GiTurbineSlots> {
}
export {};

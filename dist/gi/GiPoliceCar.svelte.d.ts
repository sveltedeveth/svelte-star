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
export type GiPoliceCarProps = typeof __propDef.props;
export type GiPoliceCarEvents = typeof __propDef.events;
export type GiPoliceCarSlots = typeof __propDef.slots;
export default class GiPoliceCar extends SvelteComponentTyped<GiPoliceCarProps, GiPoliceCarEvents, GiPoliceCarSlots> {
}
export {};

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
export type GiRaceCarProps = typeof __propDef.props;
export type GiRaceCarEvents = typeof __propDef.events;
export type GiRaceCarSlots = typeof __propDef.slots;
export default class GiRaceCar extends SvelteComponentTyped<GiRaceCarProps, GiRaceCarEvents, GiRaceCarSlots> {
}
export {};

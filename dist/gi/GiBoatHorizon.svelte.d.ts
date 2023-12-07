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
export type GiBoatHorizonProps = typeof __propDef.props;
export type GiBoatHorizonEvents = typeof __propDef.events;
export type GiBoatHorizonSlots = typeof __propDef.slots;
export default class GiBoatHorizon extends SvelteComponentTyped<GiBoatHorizonProps, GiBoatHorizonEvents, GiBoatHorizonSlots> {
}
export {};

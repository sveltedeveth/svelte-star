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
export type GiSpeedometerProps = typeof __propDef.props;
export type GiSpeedometerEvents = typeof __propDef.events;
export type GiSpeedometerSlots = typeof __propDef.slots;
export default class GiSpeedometer extends SvelteComponentTyped<GiSpeedometerProps, GiSpeedometerEvents, GiSpeedometerSlots> {
}
export {};

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
export type GiMovementSensorProps = typeof __propDef.props;
export type GiMovementSensorEvents = typeof __propDef.events;
export type GiMovementSensorSlots = typeof __propDef.slots;
export default class GiMovementSensor extends SvelteComponentTyped<GiMovementSensorProps, GiMovementSensorEvents, GiMovementSensorSlots> {
}
export {};

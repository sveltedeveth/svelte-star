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
export type FaTruckMovingProps = typeof __propDef.props;
export type FaTruckMovingEvents = typeof __propDef.events;
export type FaTruckMovingSlots = typeof __propDef.slots;
export default class FaTruckMoving extends SvelteComponentTyped<FaTruckMovingProps, FaTruckMovingEvents, FaTruckMovingSlots> {
}
export {};

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
export type GiSteeringWheelProps = typeof __propDef.props;
export type GiSteeringWheelEvents = typeof __propDef.events;
export type GiSteeringWheelSlots = typeof __propDef.slots;
export default class GiSteeringWheel extends SvelteComponentTyped<GiSteeringWheelProps, GiSteeringWheelEvents, GiSteeringWheelSlots> {
}
export {};

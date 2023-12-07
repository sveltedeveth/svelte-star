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
export type GiShipWheelProps = typeof __propDef.props;
export type GiShipWheelEvents = typeof __propDef.events;
export type GiShipWheelSlots = typeof __propDef.slots;
export default class GiShipWheel extends SvelteComponentTyped<GiShipWheelProps, GiShipWheelEvents, GiShipWheelSlots> {
}
export {};

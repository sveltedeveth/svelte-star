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
export type GiCarWheelProps = typeof __propDef.props;
export type GiCarWheelEvents = typeof __propDef.events;
export type GiCarWheelSlots = typeof __propDef.slots;
export default class GiCarWheel extends SvelteComponentTyped<GiCarWheelProps, GiCarWheelEvents, GiCarWheelSlots> {
}
export {};

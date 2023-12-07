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
export type FaTrafficLightProps = typeof __propDef.props;
export type FaTrafficLightEvents = typeof __propDef.events;
export type FaTrafficLightSlots = typeof __propDef.slots;
export default class FaTrafficLight extends SvelteComponentTyped<FaTrafficLightProps, FaTrafficLightEvents, FaTrafficLightSlots> {
}
export {};

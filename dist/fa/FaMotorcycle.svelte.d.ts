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
export type FaMotorcycleProps = typeof __propDef.props;
export type FaMotorcycleEvents = typeof __propDef.events;
export type FaMotorcycleSlots = typeof __propDef.slots;
export default class FaMotorcycle extends SvelteComponentTyped<FaMotorcycleProps, FaMotorcycleEvents, FaMotorcycleSlots> {
}
export {};

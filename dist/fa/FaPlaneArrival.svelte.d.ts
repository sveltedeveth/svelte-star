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
export type FaPlaneArrivalProps = typeof __propDef.props;
export type FaPlaneArrivalEvents = typeof __propDef.events;
export type FaPlaneArrivalSlots = typeof __propDef.slots;
export default class FaPlaneArrival extends SvelteComponentTyped<FaPlaneArrivalProps, FaPlaneArrivalEvents, FaPlaneArrivalSlots> {
}
export {};

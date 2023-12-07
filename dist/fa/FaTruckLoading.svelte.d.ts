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
export type FaTruckLoadingProps = typeof __propDef.props;
export type FaTruckLoadingEvents = typeof __propDef.events;
export type FaTruckLoadingSlots = typeof __propDef.slots;
export default class FaTruckLoading extends SvelteComponentTyped<FaTruckLoadingProps, FaTruckLoadingEvents, FaTruckLoadingSlots> {
}
export {};

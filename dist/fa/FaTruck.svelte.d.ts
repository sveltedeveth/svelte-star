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
export type FaTruckProps = typeof __propDef.props;
export type FaTruckEvents = typeof __propDef.events;
export type FaTruckSlots = typeof __propDef.slots;
export default class FaTruck extends SvelteComponentTyped<FaTruckProps, FaTruckEvents, FaTruckSlots> {
}
export {};

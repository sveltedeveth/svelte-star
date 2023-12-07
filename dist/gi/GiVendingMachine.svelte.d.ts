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
export type GiVendingMachineProps = typeof __propDef.props;
export type GiVendingMachineEvents = typeof __propDef.events;
export type GiVendingMachineSlots = typeof __propDef.slots;
export default class GiVendingMachine extends SvelteComponentTyped<GiVendingMachineProps, GiVendingMachineEvents, GiVendingMachineSlots> {
}
export {};

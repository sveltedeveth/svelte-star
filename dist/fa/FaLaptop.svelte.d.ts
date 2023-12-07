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
export type FaLaptopProps = typeof __propDef.props;
export type FaLaptopEvents = typeof __propDef.events;
export type FaLaptopSlots = typeof __propDef.slots;
export default class FaLaptop extends SvelteComponentTyped<FaLaptopProps, FaLaptopEvents, FaLaptopSlots> {
}
export {};

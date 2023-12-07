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
export type MdLaptopProps = typeof __propDef.props;
export type MdLaptopEvents = typeof __propDef.events;
export type MdLaptopSlots = typeof __propDef.slots;
export default class MdLaptop extends SvelteComponentTyped<MdLaptopProps, MdLaptopEvents, MdLaptopSlots> {
}
export {};

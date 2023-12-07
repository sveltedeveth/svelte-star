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
export type MdLaptopMacProps = typeof __propDef.props;
export type MdLaptopMacEvents = typeof __propDef.events;
export type MdLaptopMacSlots = typeof __propDef.slots;
export default class MdLaptopMac extends SvelteComponentTyped<MdLaptopMacProps, MdLaptopMacEvents, MdLaptopMacSlots> {
}
export {};

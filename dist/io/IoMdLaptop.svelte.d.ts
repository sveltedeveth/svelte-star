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
export type IoMdLaptopProps = typeof __propDef.props;
export type IoMdLaptopEvents = typeof __propDef.events;
export type IoMdLaptopSlots = typeof __propDef.slots;
export default class IoMdLaptop extends SvelteComponentTyped<IoMdLaptopProps, IoMdLaptopEvents, IoMdLaptopSlots> {
}
export {};

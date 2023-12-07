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
export type MdLaptopWindowsProps = typeof __propDef.props;
export type MdLaptopWindowsEvents = typeof __propDef.events;
export type MdLaptopWindowsSlots = typeof __propDef.slots;
export default class MdLaptopWindows extends SvelteComponentTyped<MdLaptopWindowsProps, MdLaptopWindowsEvents, MdLaptopWindowsSlots> {
}
export {};

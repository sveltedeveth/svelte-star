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
export type FaLaptopCodeProps = typeof __propDef.props;
export type FaLaptopCodeEvents = typeof __propDef.events;
export type FaLaptopCodeSlots = typeof __propDef.slots;
export default class FaLaptopCode extends SvelteComponentTyped<FaLaptopCodeProps, FaLaptopCodeEvents, FaLaptopCodeSlots> {
}
export {};

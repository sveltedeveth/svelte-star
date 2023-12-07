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
export type MdHourglassFullProps = typeof __propDef.props;
export type MdHourglassFullEvents = typeof __propDef.events;
export type MdHourglassFullSlots = typeof __propDef.slots;
export default class MdHourglassFull extends SvelteComponentTyped<MdHourglassFullProps, MdHourglassFullEvents, MdHourglassFullSlots> {
}
export {};

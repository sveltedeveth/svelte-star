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
export type MdLocalPostOfficeProps = typeof __propDef.props;
export type MdLocalPostOfficeEvents = typeof __propDef.events;
export type MdLocalPostOfficeSlots = typeof __propDef.slots;
export default class MdLocalPostOffice extends SvelteComponentTyped<MdLocalPostOfficeProps, MdLocalPostOfficeEvents, MdLocalPostOfficeSlots> {
}
export {};

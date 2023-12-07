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
export type MdLocalPrintshopProps = typeof __propDef.props;
export type MdLocalPrintshopEvents = typeof __propDef.events;
export type MdLocalPrintshopSlots = typeof __propDef.slots;
export default class MdLocalPrintshop extends SvelteComponentTyped<MdLocalPrintshopProps, MdLocalPrintshopEvents, MdLocalPrintshopSlots> {
}
export {};

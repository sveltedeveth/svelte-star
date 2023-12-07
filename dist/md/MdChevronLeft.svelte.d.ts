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
export type MdChevronLeftProps = typeof __propDef.props;
export type MdChevronLeftEvents = typeof __propDef.events;
export type MdChevronLeftSlots = typeof __propDef.slots;
export default class MdChevronLeft extends SvelteComponentTyped<MdChevronLeftProps, MdChevronLeftEvents, MdChevronLeftSlots> {
}
export {};

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
export type MdChevronRightProps = typeof __propDef.props;
export type MdChevronRightEvents = typeof __propDef.events;
export type MdChevronRightSlots = typeof __propDef.slots;
export default class MdChevronRight extends SvelteComponentTyped<MdChevronRightProps, MdChevronRightEvents, MdChevronRightSlots> {
}
export {};

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
export type MdCompareArrowsProps = typeof __propDef.props;
export type MdCompareArrowsEvents = typeof __propDef.events;
export type MdCompareArrowsSlots = typeof __propDef.slots;
export default class MdCompareArrows extends SvelteComponentTyped<MdCompareArrowsProps, MdCompareArrowsEvents, MdCompareArrowsSlots> {
}
export {};

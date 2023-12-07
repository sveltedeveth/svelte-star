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
export type MdSortProps = typeof __propDef.props;
export type MdSortEvents = typeof __propDef.events;
export type MdSortSlots = typeof __propDef.slots;
export default class MdSort extends SvelteComponentTyped<MdSortProps, MdSortEvents, MdSortSlots> {
}
export {};

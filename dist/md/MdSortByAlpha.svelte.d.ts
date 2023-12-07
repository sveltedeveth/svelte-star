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
export type MdSortByAlphaProps = typeof __propDef.props;
export type MdSortByAlphaEvents = typeof __propDef.events;
export type MdSortByAlphaSlots = typeof __propDef.slots;
export default class MdSortByAlpha extends SvelteComponentTyped<MdSortByAlphaProps, MdSortByAlphaEvents, MdSortByAlphaSlots> {
}
export {};

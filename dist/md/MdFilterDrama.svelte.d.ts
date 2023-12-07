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
export type MdFilterDramaProps = typeof __propDef.props;
export type MdFilterDramaEvents = typeof __propDef.events;
export type MdFilterDramaSlots = typeof __propDef.slots;
export default class MdFilterDrama extends SvelteComponentTyped<MdFilterDramaProps, MdFilterDramaEvents, MdFilterDramaSlots> {
}
export {};

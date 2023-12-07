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
export type FaRegObjectGroupProps = typeof __propDef.props;
export type FaRegObjectGroupEvents = typeof __propDef.events;
export type FaRegObjectGroupSlots = typeof __propDef.slots;
export default class FaRegObjectGroup extends SvelteComponentTyped<FaRegObjectGroupProps, FaRegObjectGroupEvents, FaRegObjectGroupSlots> {
}
export {};

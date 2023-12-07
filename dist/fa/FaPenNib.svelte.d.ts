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
export type FaPenNibProps = typeof __propDef.props;
export type FaPenNibEvents = typeof __propDef.events;
export type FaPenNibSlots = typeof __propDef.slots;
export default class FaPenNib extends SvelteComponentTyped<FaPenNibProps, FaPenNibEvents, FaPenNibSlots> {
}
export {};

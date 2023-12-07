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
export type FaBlogProps = typeof __propDef.props;
export type FaBlogEvents = typeof __propDef.events;
export type FaBlogSlots = typeof __propDef.slots;
export default class FaBlog extends SvelteComponentTyped<FaBlogProps, FaBlogEvents, FaBlogSlots> {
}
export {};

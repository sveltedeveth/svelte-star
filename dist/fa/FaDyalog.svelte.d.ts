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
export type FaDyalogProps = typeof __propDef.props;
export type FaDyalogEvents = typeof __propDef.events;
export type FaDyalogSlots = typeof __propDef.slots;
export default class FaDyalog extends SvelteComponentTyped<FaDyalogProps, FaDyalogEvents, FaDyalogSlots> {
}
export {};

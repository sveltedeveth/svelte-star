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
export type FaPoopProps = typeof __propDef.props;
export type FaPoopEvents = typeof __propDef.events;
export type FaPoopSlots = typeof __propDef.slots;
export default class FaPoop extends SvelteComponentTyped<FaPoopProps, FaPoopEvents, FaPoopSlots> {
}
export {};

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
export type MdLocalLibraryProps = typeof __propDef.props;
export type MdLocalLibraryEvents = typeof __propDef.events;
export type MdLocalLibrarySlots = typeof __propDef.slots;
export default class MdLocalLibrary extends SvelteComponentTyped<MdLocalLibraryProps, MdLocalLibraryEvents, MdLocalLibrarySlots> {
}
export {};

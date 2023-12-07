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
export type MdVideoLibraryProps = typeof __propDef.props;
export type MdVideoLibraryEvents = typeof __propDef.events;
export type MdVideoLibrarySlots = typeof __propDef.slots;
export default class MdVideoLibrary extends SvelteComponentTyped<MdVideoLibraryProps, MdVideoLibraryEvents, MdVideoLibrarySlots> {
}
export {};

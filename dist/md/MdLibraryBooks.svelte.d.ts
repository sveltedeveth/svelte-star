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
export type MdLibraryBooksProps = typeof __propDef.props;
export type MdLibraryBooksEvents = typeof __propDef.events;
export type MdLibraryBooksSlots = typeof __propDef.slots;
export default class MdLibraryBooks extends SvelteComponentTyped<MdLibraryBooksProps, MdLibraryBooksEvents, MdLibraryBooksSlots> {
}
export {};

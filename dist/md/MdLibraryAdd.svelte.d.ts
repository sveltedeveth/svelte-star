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
export type MdLibraryAddProps = typeof __propDef.props;
export type MdLibraryAddEvents = typeof __propDef.events;
export type MdLibraryAddSlots = typeof __propDef.slots;
export default class MdLibraryAdd extends SvelteComponentTyped<MdLibraryAddProps, MdLibraryAddEvents, MdLibraryAddSlots> {
}
export {};

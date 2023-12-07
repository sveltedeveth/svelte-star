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
export type MdStoreMallDirectoryProps = typeof __propDef.props;
export type MdStoreMallDirectoryEvents = typeof __propDef.events;
export type MdStoreMallDirectorySlots = typeof __propDef.slots;
export default class MdStoreMallDirectory extends SvelteComponentTyped<MdStoreMallDirectoryProps, MdStoreMallDirectoryEvents, MdStoreMallDirectorySlots> {
}
export {};

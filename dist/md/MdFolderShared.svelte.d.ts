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
export type MdFolderSharedProps = typeof __propDef.props;
export type MdFolderSharedEvents = typeof __propDef.events;
export type MdFolderSharedSlots = typeof __propDef.slots;
export default class MdFolderShared extends SvelteComponentTyped<MdFolderSharedProps, MdFolderSharedEvents, MdFolderSharedSlots> {
}
export {};

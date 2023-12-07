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
export type MdFolderOpenProps = typeof __propDef.props;
export type MdFolderOpenEvents = typeof __propDef.events;
export type MdFolderOpenSlots = typeof __propDef.slots;
export default class MdFolderOpen extends SvelteComponentTyped<MdFolderOpenProps, MdFolderOpenEvents, MdFolderOpenSlots> {
}
export {};

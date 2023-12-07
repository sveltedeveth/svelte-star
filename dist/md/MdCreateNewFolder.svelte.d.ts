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
export type MdCreateNewFolderProps = typeof __propDef.props;
export type MdCreateNewFolderEvents = typeof __propDef.events;
export type MdCreateNewFolderSlots = typeof __propDef.slots;
export default class MdCreateNewFolder extends SvelteComponentTyped<MdCreateNewFolderProps, MdCreateNewFolderEvents, MdCreateNewFolderSlots> {
}
export {};

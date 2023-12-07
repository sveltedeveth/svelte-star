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
export type MdFolderProps = typeof __propDef.props;
export type MdFolderEvents = typeof __propDef.events;
export type MdFolderSlots = typeof __propDef.slots;
export default class MdFolder extends SvelteComponentTyped<MdFolderProps, MdFolderEvents, MdFolderSlots> {
}
export {};

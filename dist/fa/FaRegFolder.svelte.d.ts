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
export type FaRegFolderProps = typeof __propDef.props;
export type FaRegFolderEvents = typeof __propDef.events;
export type FaRegFolderSlots = typeof __propDef.slots;
export default class FaRegFolder extends SvelteComponentTyped<FaRegFolderProps, FaRegFolderEvents, FaRegFolderSlots> {
}
export {};

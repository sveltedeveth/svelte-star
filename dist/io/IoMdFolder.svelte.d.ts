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
export type IoMdFolderProps = typeof __propDef.props;
export type IoMdFolderEvents = typeof __propDef.events;
export type IoMdFolderSlots = typeof __propDef.slots;
export default class IoMdFolder extends SvelteComponentTyped<IoMdFolderProps, IoMdFolderEvents, IoMdFolderSlots> {
}
export {};

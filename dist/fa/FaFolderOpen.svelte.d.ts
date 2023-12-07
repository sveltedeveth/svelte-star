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
export type FaFolderOpenProps = typeof __propDef.props;
export type FaFolderOpenEvents = typeof __propDef.events;
export type FaFolderOpenSlots = typeof __propDef.slots;
export default class FaFolderOpen extends SvelteComponentTyped<FaFolderOpenProps, FaFolderOpenEvents, FaFolderOpenSlots> {
}
export {};

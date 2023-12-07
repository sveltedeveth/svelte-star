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
export type FaFolderPlusProps = typeof __propDef.props;
export type FaFolderPlusEvents = typeof __propDef.events;
export type FaFolderPlusSlots = typeof __propDef.slots;
export default class FaFolderPlus extends SvelteComponentTyped<FaFolderPlusProps, FaFolderPlusEvents, FaFolderPlusSlots> {
}
export {};

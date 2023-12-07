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
export type FaFolderProps = typeof __propDef.props;
export type FaFolderEvents = typeof __propDef.events;
export type FaFolderSlots = typeof __propDef.slots;
export default class FaFolder extends SvelteComponentTyped<FaFolderProps, FaFolderEvents, FaFolderSlots> {
}
export {};

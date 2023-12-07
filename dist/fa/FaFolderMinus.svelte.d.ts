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
export type FaFolderMinusProps = typeof __propDef.props;
export type FaFolderMinusEvents = typeof __propDef.events;
export type FaFolderMinusSlots = typeof __propDef.slots;
export default class FaFolderMinus extends SvelteComponentTyped<FaFolderMinusProps, FaFolderMinusEvents, FaFolderMinusSlots> {
}
export {};

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
export type FaTrashRestoreProps = typeof __propDef.props;
export type FaTrashRestoreEvents = typeof __propDef.events;
export type FaTrashRestoreSlots = typeof __propDef.slots;
export default class FaTrashRestore extends SvelteComponentTyped<FaTrashRestoreProps, FaTrashRestoreEvents, FaTrashRestoreSlots> {
}
export {};

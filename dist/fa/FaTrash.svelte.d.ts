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
export type FaTrashProps = typeof __propDef.props;
export type FaTrashEvents = typeof __propDef.events;
export type FaTrashSlots = typeof __propDef.slots;
export default class FaTrash extends SvelteComponentTyped<FaTrashProps, FaTrashEvents, FaTrashSlots> {
}
export {};

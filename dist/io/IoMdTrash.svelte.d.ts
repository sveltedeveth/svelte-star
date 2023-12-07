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
export type IoMdTrashProps = typeof __propDef.props;
export type IoMdTrashEvents = typeof __propDef.events;
export type IoMdTrashSlots = typeof __propDef.slots;
export default class IoMdTrash extends SvelteComponentTyped<IoMdTrashProps, IoMdTrashEvents, IoMdTrashSlots> {
}
export {};

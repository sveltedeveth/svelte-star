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
export type TiTrashProps = typeof __propDef.props;
export type TiTrashEvents = typeof __propDef.events;
export type TiTrashSlots = typeof __propDef.slots;
export default class TiTrash extends SvelteComponentTyped<TiTrashProps, TiTrashEvents, TiTrashSlots> {
}
export {};

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
export type IoIosTrashProps = typeof __propDef.props;
export type IoIosTrashEvents = typeof __propDef.events;
export type IoIosTrashSlots = typeof __propDef.slots;
export default class IoIosTrash extends SvelteComponentTyped<IoIosTrashProps, IoIosTrashEvents, IoIosTrashSlots> {
}
export {};

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
export type IoIosListProps = typeof __propDef.props;
export type IoIosListEvents = typeof __propDef.events;
export type IoIosListSlots = typeof __propDef.slots;
export default class IoIosList extends SvelteComponentTyped<IoIosListProps, IoIosListEvents, IoIosListSlots> {
}
export {};

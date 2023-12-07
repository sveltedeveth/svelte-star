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
export type IoMdAppstoreProps = typeof __propDef.props;
export type IoMdAppstoreEvents = typeof __propDef.events;
export type IoMdAppstoreSlots = typeof __propDef.slots;
export default class IoMdAppstore extends SvelteComponentTyped<IoMdAppstoreProps, IoMdAppstoreEvents, IoMdAppstoreSlots> {
}
export {};

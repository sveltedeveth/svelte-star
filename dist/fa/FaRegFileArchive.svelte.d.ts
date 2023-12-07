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
export type FaRegFileArchiveProps = typeof __propDef.props;
export type FaRegFileArchiveEvents = typeof __propDef.events;
export type FaRegFileArchiveSlots = typeof __propDef.slots;
export default class FaRegFileArchive extends SvelteComponentTyped<FaRegFileArchiveProps, FaRegFileArchiveEvents, FaRegFileArchiveSlots> {
}
export {};

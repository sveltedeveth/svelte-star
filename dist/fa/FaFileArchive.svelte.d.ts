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
export type FaFileArchiveProps = typeof __propDef.props;
export type FaFileArchiveEvents = typeof __propDef.events;
export type FaFileArchiveSlots = typeof __propDef.slots;
export default class FaFileArchive extends SvelteComponentTyped<FaFileArchiveProps, FaFileArchiveEvents, FaFileArchiveSlots> {
}
export {};

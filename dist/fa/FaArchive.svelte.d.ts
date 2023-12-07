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
export type FaArchiveProps = typeof __propDef.props;
export type FaArchiveEvents = typeof __propDef.events;
export type FaArchiveSlots = typeof __propDef.slots;
export default class FaArchive extends SvelteComponentTyped<FaArchiveProps, FaArchiveEvents, FaArchiveSlots> {
}
export {};

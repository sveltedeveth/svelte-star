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
export type IoMdArchiveProps = typeof __propDef.props;
export type IoMdArchiveEvents = typeof __propDef.events;
export type IoMdArchiveSlots = typeof __propDef.slots;
export default class IoMdArchive extends SvelteComponentTyped<IoMdArchiveProps, IoMdArchiveEvents, IoMdArchiveSlots> {
}
export {};

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
export type MdArchiveProps = typeof __propDef.props;
export type MdArchiveEvents = typeof __propDef.events;
export type MdArchiveSlots = typeof __propDef.slots;
export default class MdArchive extends SvelteComponentTyped<MdArchiveProps, MdArchiveEvents, MdArchiveSlots> {
}
export {};

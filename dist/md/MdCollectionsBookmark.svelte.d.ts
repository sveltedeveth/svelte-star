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
export type MdCollectionsBookmarkProps = typeof __propDef.props;
export type MdCollectionsBookmarkEvents = typeof __propDef.events;
export type MdCollectionsBookmarkSlots = typeof __propDef.slots;
export default class MdCollectionsBookmark extends SvelteComponentTyped<MdCollectionsBookmarkProps, MdCollectionsBookmarkEvents, MdCollectionsBookmarkSlots> {
}
export {};

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
export type IoMdBookmarksProps = typeof __propDef.props;
export type IoMdBookmarksEvents = typeof __propDef.events;
export type IoMdBookmarksSlots = typeof __propDef.slots;
export default class IoMdBookmarks extends SvelteComponentTyped<IoMdBookmarksProps, IoMdBookmarksEvents, IoMdBookmarksSlots> {
}
export {};

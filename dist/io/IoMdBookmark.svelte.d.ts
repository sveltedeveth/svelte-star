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
export type IoMdBookmarkProps = typeof __propDef.props;
export type IoMdBookmarkEvents = typeof __propDef.events;
export type IoMdBookmarkSlots = typeof __propDef.slots;
export default class IoMdBookmark extends SvelteComponentTyped<IoMdBookmarkProps, IoMdBookmarkEvents, IoMdBookmarkSlots> {
}
export {};

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
export type FaBookmarkProps = typeof __propDef.props;
export type FaBookmarkEvents = typeof __propDef.events;
export type FaBookmarkSlots = typeof __propDef.slots;
export default class FaBookmark extends SvelteComponentTyped<FaBookmarkProps, FaBookmarkEvents, FaBookmarkSlots> {
}
export {};

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
export type FaRegBookmarkProps = typeof __propDef.props;
export type FaRegBookmarkEvents = typeof __propDef.events;
export type FaRegBookmarkSlots = typeof __propDef.slots;
export default class FaRegBookmark extends SvelteComponentTyped<FaRegBookmarkProps, FaRegBookmarkEvents, FaRegBookmarkSlots> {
}
export {};

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
export type MdBookmarkProps = typeof __propDef.props;
export type MdBookmarkEvents = typeof __propDef.events;
export type MdBookmarkSlots = typeof __propDef.slots;
export default class MdBookmark extends SvelteComponentTyped<MdBookmarkProps, MdBookmarkEvents, MdBookmarkSlots> {
}
export {};

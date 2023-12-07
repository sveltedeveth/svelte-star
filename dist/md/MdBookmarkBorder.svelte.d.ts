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
export type MdBookmarkBorderProps = typeof __propDef.props;
export type MdBookmarkBorderEvents = typeof __propDef.events;
export type MdBookmarkBorderSlots = typeof __propDef.slots;
export default class MdBookmarkBorder extends SvelteComponentTyped<MdBookmarkBorderProps, MdBookmarkBorderEvents, MdBookmarkBorderSlots> {
}
export {};

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
export type GiBookmarkProps = typeof __propDef.props;
export type GiBookmarkEvents = typeof __propDef.events;
export type GiBookmarkSlots = typeof __propDef.slots;
export default class GiBookmark extends SvelteComponentTyped<GiBookmarkProps, GiBookmarkEvents, GiBookmarkSlots> {
}
export {};

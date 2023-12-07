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
export type TiBookmarkProps = typeof __propDef.props;
export type TiBookmarkEvents = typeof __propDef.events;
export type TiBookmarkSlots = typeof __propDef.slots;
export default class TiBookmark extends SvelteComponentTyped<TiBookmarkProps, TiBookmarkEvents, TiBookmarkSlots> {
}
export {};

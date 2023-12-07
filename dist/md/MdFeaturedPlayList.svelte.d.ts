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
export type MdFeaturedPlayListProps = typeof __propDef.props;
export type MdFeaturedPlayListEvents = typeof __propDef.events;
export type MdFeaturedPlayListSlots = typeof __propDef.slots;
export default class MdFeaturedPlayList extends SvelteComponentTyped<MdFeaturedPlayListProps, MdFeaturedPlayListEvents, MdFeaturedPlayListSlots> {
}
export {};

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
export type MdAlbumProps = typeof __propDef.props;
export type MdAlbumEvents = typeof __propDef.events;
export type MdAlbumSlots = typeof __propDef.slots;
export default class MdAlbum extends SvelteComponentTyped<MdAlbumProps, MdAlbumEvents, MdAlbumSlots> {
}
export {};

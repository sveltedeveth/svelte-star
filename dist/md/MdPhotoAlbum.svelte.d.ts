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
export type MdPhotoAlbumProps = typeof __propDef.props;
export type MdPhotoAlbumEvents = typeof __propDef.events;
export type MdPhotoAlbumSlots = typeof __propDef.slots;
export default class MdPhotoAlbum extends SvelteComponentTyped<MdPhotoAlbumProps, MdPhotoAlbumEvents, MdPhotoAlbumSlots> {
}
export {};

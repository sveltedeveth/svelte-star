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
export type IoMdAlbumsProps = typeof __propDef.props;
export type IoMdAlbumsEvents = typeof __propDef.events;
export type IoMdAlbumsSlots = typeof __propDef.slots;
export default class IoMdAlbums extends SvelteComponentTyped<IoMdAlbumsProps, IoMdAlbumsEvents, IoMdAlbumsSlots> {
}
export {};

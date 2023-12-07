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
export type FaPhotoVideoProps = typeof __propDef.props;
export type FaPhotoVideoEvents = typeof __propDef.events;
export type FaPhotoVideoSlots = typeof __propDef.slots;
export default class FaPhotoVideo extends SvelteComponentTyped<FaPhotoVideoProps, FaPhotoVideoEvents, FaPhotoVideoSlots> {
}
export {};

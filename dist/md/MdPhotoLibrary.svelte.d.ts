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
export type MdPhotoLibraryProps = typeof __propDef.props;
export type MdPhotoLibraryEvents = typeof __propDef.events;
export type MdPhotoLibrarySlots = typeof __propDef.slots;
export default class MdPhotoLibrary extends SvelteComponentTyped<MdPhotoLibraryProps, MdPhotoLibraryEvents, MdPhotoLibrarySlots> {
}
export {};

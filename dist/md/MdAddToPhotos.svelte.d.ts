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
export type MdAddToPhotosProps = typeof __propDef.props;
export type MdAddToPhotosEvents = typeof __propDef.events;
export type MdAddToPhotosSlots = typeof __propDef.slots;
export default class MdAddToPhotos extends SvelteComponentTyped<MdAddToPhotosProps, MdAddToPhotosEvents, MdAddToPhotosSlots> {
}
export {};

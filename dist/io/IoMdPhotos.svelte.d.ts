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
export type IoMdPhotosProps = typeof __propDef.props;
export type IoMdPhotosEvents = typeof __propDef.events;
export type IoMdPhotosSlots = typeof __propDef.slots;
export default class IoMdPhotos extends SvelteComponentTyped<IoMdPhotosProps, IoMdPhotosEvents, IoMdPhotosSlots> {
}
export {};

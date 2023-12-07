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
export type MdMonochromePhotosProps = typeof __propDef.props;
export type MdMonochromePhotosEvents = typeof __propDef.events;
export type MdMonochromePhotosSlots = typeof __propDef.slots;
export default class MdMonochromePhotos extends SvelteComponentTyped<MdMonochromePhotosProps, MdMonochromePhotosEvents, MdMonochromePhotosSlots> {
}
export {};

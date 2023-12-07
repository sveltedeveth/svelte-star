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
export type IoMdImagesProps = typeof __propDef.props;
export type IoMdImagesEvents = typeof __propDef.events;
export type IoMdImagesSlots = typeof __propDef.slots;
export default class IoMdImages extends SvelteComponentTyped<IoMdImagesProps, IoMdImagesEvents, IoMdImagesSlots> {
}
export {};

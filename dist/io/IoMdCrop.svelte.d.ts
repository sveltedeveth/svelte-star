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
export type IoMdCropProps = typeof __propDef.props;
export type IoMdCropEvents = typeof __propDef.events;
export type IoMdCropSlots = typeof __propDef.slots;
export default class IoMdCrop extends SvelteComponentTyped<IoMdCropProps, IoMdCropEvents, IoMdCropSlots> {
}
export {};

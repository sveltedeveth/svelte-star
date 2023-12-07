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
export type MdCropProps = typeof __propDef.props;
export type MdCropEvents = typeof __propDef.events;
export type MdCropSlots = typeof __propDef.slots;
export default class MdCrop extends SvelteComponentTyped<MdCropProps, MdCropEvents, MdCropSlots> {
}
export {};

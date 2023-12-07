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
export type MdCropPortraitProps = typeof __propDef.props;
export type MdCropPortraitEvents = typeof __propDef.events;
export type MdCropPortraitSlots = typeof __propDef.slots;
export default class MdCropPortrait extends SvelteComponentTyped<MdCropPortraitProps, MdCropPortraitEvents, MdCropPortraitSlots> {
}
export {};

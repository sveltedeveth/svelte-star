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
export type MdCropOriginalProps = typeof __propDef.props;
export type MdCropOriginalEvents = typeof __propDef.events;
export type MdCropOriginalSlots = typeof __propDef.slots;
export default class MdCropOriginal extends SvelteComponentTyped<MdCropOriginalProps, MdCropOriginalEvents, MdCropOriginalSlots> {
}
export {};

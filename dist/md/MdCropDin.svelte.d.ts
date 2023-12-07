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
export type MdCropDinProps = typeof __propDef.props;
export type MdCropDinEvents = typeof __propDef.events;
export type MdCropDinSlots = typeof __propDef.slots;
export default class MdCropDin extends SvelteComponentTyped<MdCropDinProps, MdCropDinEvents, MdCropDinSlots> {
}
export {};

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
export type MdCropRotateProps = typeof __propDef.props;
export type MdCropRotateEvents = typeof __propDef.events;
export type MdCropRotateSlots = typeof __propDef.slots;
export default class MdCropRotate extends SvelteComponentTyped<MdCropRotateProps, MdCropRotateEvents, MdCropRotateSlots> {
}
export {};

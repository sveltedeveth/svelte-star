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
export type MdCropFreeProps = typeof __propDef.props;
export type MdCropFreeEvents = typeof __propDef.events;
export type MdCropFreeSlots = typeof __propDef.slots;
export default class MdCropFree extends SvelteComponentTyped<MdCropFreeProps, MdCropFreeEvents, MdCropFreeSlots> {
}
export {};

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
export type MdLinkedCameraProps = typeof __propDef.props;
export type MdLinkedCameraEvents = typeof __propDef.events;
export type MdLinkedCameraSlots = typeof __propDef.slots;
export default class MdLinkedCamera extends SvelteComponentTyped<MdLinkedCameraProps, MdLinkedCameraEvents, MdLinkedCameraSlots> {
}
export {};

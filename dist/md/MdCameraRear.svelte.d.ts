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
export type MdCameraRearProps = typeof __propDef.props;
export type MdCameraRearEvents = typeof __propDef.events;
export type MdCameraRearSlots = typeof __propDef.slots;
export default class MdCameraRear extends SvelteComponentTyped<MdCameraRearProps, MdCameraRearEvents, MdCameraRearSlots> {
}
export {};

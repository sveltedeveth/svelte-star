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
export type MdCameraRollProps = typeof __propDef.props;
export type MdCameraRollEvents = typeof __propDef.events;
export type MdCameraRollSlots = typeof __propDef.slots;
export default class MdCameraRoll extends SvelteComponentTyped<MdCameraRollProps, MdCameraRollEvents, MdCameraRollSlots> {
}
export {};

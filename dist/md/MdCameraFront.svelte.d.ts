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
export type MdCameraFrontProps = typeof __propDef.props;
export type MdCameraFrontEvents = typeof __propDef.events;
export type MdCameraFrontSlots = typeof __propDef.slots;
export default class MdCameraFront extends SvelteComponentTyped<MdCameraFrontProps, MdCameraFrontEvents, MdCameraFrontSlots> {
}
export {};

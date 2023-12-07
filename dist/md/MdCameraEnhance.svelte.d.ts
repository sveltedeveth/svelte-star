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
export type MdCameraEnhanceProps = typeof __propDef.props;
export type MdCameraEnhanceEvents = typeof __propDef.events;
export type MdCameraEnhanceSlots = typeof __propDef.slots;
export default class MdCameraEnhance extends SvelteComponentTyped<MdCameraEnhanceProps, MdCameraEnhanceEvents, MdCameraEnhanceSlots> {
}
export {};

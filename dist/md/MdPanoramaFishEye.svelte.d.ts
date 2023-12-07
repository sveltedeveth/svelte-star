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
export type MdPanoramaFishEyeProps = typeof __propDef.props;
export type MdPanoramaFishEyeEvents = typeof __propDef.events;
export type MdPanoramaFishEyeSlots = typeof __propDef.slots;
export default class MdPanoramaFishEye extends SvelteComponentTyped<MdPanoramaFishEyeProps, MdPanoramaFishEyeEvents, MdPanoramaFishEyeSlots> {
}
export {};

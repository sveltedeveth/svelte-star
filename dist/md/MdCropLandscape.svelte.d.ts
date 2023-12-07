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
export type MdCropLandscapeProps = typeof __propDef.props;
export type MdCropLandscapeEvents = typeof __propDef.events;
export type MdCropLandscapeSlots = typeof __propDef.slots;
export default class MdCropLandscape extends SvelteComponentTyped<MdCropLandscapeProps, MdCropLandscapeEvents, MdCropLandscapeSlots> {
}
export {};

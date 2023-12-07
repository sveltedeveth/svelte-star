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
export type MdAddAPhotoProps = typeof __propDef.props;
export type MdAddAPhotoEvents = typeof __propDef.events;
export type MdAddAPhotoSlots = typeof __propDef.slots;
export default class MdAddAPhoto extends SvelteComponentTyped<MdAddAPhotoProps, MdAddAPhotoEvents, MdAddAPhotoSlots> {
}
export {};

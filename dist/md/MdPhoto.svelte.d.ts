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
export type MdPhotoProps = typeof __propDef.props;
export type MdPhotoEvents = typeof __propDef.events;
export type MdPhotoSlots = typeof __propDef.slots;
export default class MdPhoto extends SvelteComponentTyped<MdPhotoProps, MdPhotoEvents, MdPhotoSlots> {
}
export {};

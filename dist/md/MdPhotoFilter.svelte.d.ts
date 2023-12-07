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
export type MdPhotoFilterProps = typeof __propDef.props;
export type MdPhotoFilterEvents = typeof __propDef.events;
export type MdPhotoFilterSlots = typeof __propDef.slots;
export default class MdPhotoFilter extends SvelteComponentTyped<MdPhotoFilterProps, MdPhotoFilterEvents, MdPhotoFilterSlots> {
}
export {};

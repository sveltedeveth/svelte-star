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
export type MdInsertPhotoProps = typeof __propDef.props;
export type MdInsertPhotoEvents = typeof __propDef.events;
export type MdInsertPhotoSlots = typeof __propDef.slots;
export default class MdInsertPhoto extends SvelteComponentTyped<MdInsertPhotoProps, MdInsertPhotoEvents, MdInsertPhotoSlots> {
}
export {};

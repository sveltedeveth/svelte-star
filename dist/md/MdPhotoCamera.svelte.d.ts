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
export type MdPhotoCameraProps = typeof __propDef.props;
export type MdPhotoCameraEvents = typeof __propDef.events;
export type MdPhotoCameraSlots = typeof __propDef.slots;
export default class MdPhotoCamera extends SvelteComponentTyped<MdPhotoCameraProps, MdPhotoCameraEvents, MdPhotoCameraSlots> {
}
export {};

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
export type MdPictureInPictureProps = typeof __propDef.props;
export type MdPictureInPictureEvents = typeof __propDef.events;
export type MdPictureInPictureSlots = typeof __propDef.slots;
export default class MdPictureInPicture extends SvelteComponentTyped<MdPictureInPictureProps, MdPictureInPictureEvents, MdPictureInPictureSlots> {
}
export {};

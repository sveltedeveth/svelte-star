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
export type MdMusicNoteProps = typeof __propDef.props;
export type MdMusicNoteEvents = typeof __propDef.events;
export type MdMusicNoteSlots = typeof __propDef.slots;
export default class MdMusicNote extends SvelteComponentTyped<MdMusicNoteProps, MdMusicNoteEvents, MdMusicNoteSlots> {
}
export {};

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
export type MdArtTrackProps = typeof __propDef.props;
export type MdArtTrackEvents = typeof __propDef.events;
export type MdArtTrackSlots = typeof __propDef.slots;
export default class MdArtTrack extends SvelteComponentTyped<MdArtTrackProps, MdArtTrackEvents, MdArtTrackSlots> {
}
export {};

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
export type MdPlaylistAddProps = typeof __propDef.props;
export type MdPlaylistAddEvents = typeof __propDef.events;
export type MdPlaylistAddSlots = typeof __propDef.slots;
export default class MdPlaylistAdd extends SvelteComponentTyped<MdPlaylistAddProps, MdPlaylistAddEvents, MdPlaylistAddSlots> {
}
export {};

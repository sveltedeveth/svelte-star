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
export type MdLibraryMusicProps = typeof __propDef.props;
export type MdLibraryMusicEvents = typeof __propDef.events;
export type MdLibraryMusicSlots = typeof __propDef.slots;
export default class MdLibraryMusic extends SvelteComponentTyped<MdLibraryMusicProps, MdLibraryMusicEvents, MdLibraryMusicSlots> {
}
export {};

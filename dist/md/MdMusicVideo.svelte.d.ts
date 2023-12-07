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
export type MdMusicVideoProps = typeof __propDef.props;
export type MdMusicVideoEvents = typeof __propDef.events;
export type MdMusicVideoSlots = typeof __propDef.slots;
export default class MdMusicVideo extends SvelteComponentTyped<MdMusicVideoProps, MdMusicVideoEvents, MdMusicVideoSlots> {
}
export {};

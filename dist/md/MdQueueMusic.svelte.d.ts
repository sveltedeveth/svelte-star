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
export type MdQueueMusicProps = typeof __propDef.props;
export type MdQueueMusicEvents = typeof __propDef.events;
export type MdQueueMusicSlots = typeof __propDef.slots;
export default class MdQueueMusic extends SvelteComponentTyped<MdQueueMusicProps, MdQueueMusicEvents, MdQueueMusicSlots> {
}
export {};

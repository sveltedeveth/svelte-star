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
export type MdInsertEmoticonProps = typeof __propDef.props;
export type MdInsertEmoticonEvents = typeof __propDef.events;
export type MdInsertEmoticonSlots = typeof __propDef.slots;
export default class MdInsertEmoticon extends SvelteComponentTyped<MdInsertEmoticonProps, MdInsertEmoticonEvents, MdInsertEmoticonSlots> {
}
export {};

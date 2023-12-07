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
export type MdForumProps = typeof __propDef.props;
export type MdForumEvents = typeof __propDef.events;
export type MdForumSlots = typeof __propDef.slots;
export default class MdForum extends SvelteComponentTyped<MdForumProps, MdForumEvents, MdForumSlots> {
}
export {};

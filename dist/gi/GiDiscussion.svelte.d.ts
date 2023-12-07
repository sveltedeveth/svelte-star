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
export type GiDiscussionProps = typeof __propDef.props;
export type GiDiscussionEvents = typeof __propDef.events;
export type GiDiscussionSlots = typeof __propDef.slots;
export default class GiDiscussion extends SvelteComponentTyped<GiDiscussionProps, GiDiscussionEvents, GiDiscussionSlots> {
}
export {};

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
export type FaPodcastProps = typeof __propDef.props;
export type FaPodcastEvents = typeof __propDef.events;
export type FaPodcastSlots = typeof __propDef.slots;
export default class FaPodcast extends SvelteComponentTyped<FaPodcastProps, FaPodcastEvents, FaPodcastSlots> {
}
export {};

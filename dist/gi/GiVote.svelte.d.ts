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
export type GiVoteProps = typeof __propDef.props;
export type GiVoteEvents = typeof __propDef.events;
export type GiVoteSlots = typeof __propDef.slots;
export default class GiVote extends SvelteComponentTyped<GiVoteProps, GiVoteEvents, GiVoteSlots> {
}
export {};

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
export type GiBookCoverProps = typeof __propDef.props;
export type GiBookCoverEvents = typeof __propDef.events;
export type GiBookCoverSlots = typeof __propDef.slots;
export default class GiBookCover extends SvelteComponentTyped<GiBookCoverProps, GiBookCoverEvents, GiBookCoverSlots> {
}
export {};

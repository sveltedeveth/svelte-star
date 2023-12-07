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
export type MdViewHeadlineProps = typeof __propDef.props;
export type MdViewHeadlineEvents = typeof __propDef.events;
export type MdViewHeadlineSlots = typeof __propDef.slots;
export default class MdViewHeadline extends SvelteComponentTyped<MdViewHeadlineProps, MdViewHeadlineEvents, MdViewHeadlineSlots> {
}
export {};

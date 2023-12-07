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
export type IoMdJournalProps = typeof __propDef.props;
export type IoMdJournalEvents = typeof __propDef.events;
export type IoMdJournalSlots = typeof __propDef.slots;
export default class IoMdJournal extends SvelteComponentTyped<IoMdJournalProps, IoMdJournalEvents, IoMdJournalSlots> {
}
export {};

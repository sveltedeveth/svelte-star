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
export type IoIosJournalProps = typeof __propDef.props;
export type IoIosJournalEvents = typeof __propDef.events;
export type IoIosJournalSlots = typeof __propDef.slots;
export default class IoIosJournal extends SvelteComponentTyped<IoIosJournalProps, IoIosJournalEvents, IoIosJournalSlots> {
}
export {};

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
export type MdTrackChangesProps = typeof __propDef.props;
export type MdTrackChangesEvents = typeof __propDef.events;
export type MdTrackChangesSlots = typeof __propDef.slots;
export default class MdTrackChanges extends SvelteComponentTyped<MdTrackChangesProps, MdTrackChangesEvents, MdTrackChangesSlots> {
}
export {};

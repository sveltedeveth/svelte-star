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
export type MdSyncProblemProps = typeof __propDef.props;
export type MdSyncProblemEvents = typeof __propDef.events;
export type MdSyncProblemSlots = typeof __propDef.slots;
export default class MdSyncProblem extends SvelteComponentTyped<MdSyncProblemProps, MdSyncProblemEvents, MdSyncProblemSlots> {
}
export {};

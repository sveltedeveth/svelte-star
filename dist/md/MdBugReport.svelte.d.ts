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
export type MdBugReportProps = typeof __propDef.props;
export type MdBugReportEvents = typeof __propDef.events;
export type MdBugReportSlots = typeof __propDef.slots;
export default class MdBugReport extends SvelteComponentTyped<MdBugReportProps, MdBugReportEvents, MdBugReportSlots> {
}
export {};

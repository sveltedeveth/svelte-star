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
export type MdReportProblemProps = typeof __propDef.props;
export type MdReportProblemEvents = typeof __propDef.events;
export type MdReportProblemSlots = typeof __propDef.slots;
export default class MdReportProblem extends SvelteComponentTyped<MdReportProblemProps, MdReportProblemEvents, MdReportProblemSlots> {
}
export {};

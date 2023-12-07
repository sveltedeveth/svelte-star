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
export type MdReportProps = typeof __propDef.props;
export type MdReportEvents = typeof __propDef.events;
export type MdReportSlots = typeof __propDef.slots;
export default class MdReport extends SvelteComponentTyped<MdReportProps, MdReportEvents, MdReportSlots> {
}
export {};

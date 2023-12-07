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
export type GoReportProps = typeof __propDef.props;
export type GoReportEvents = typeof __propDef.events;
export type GoReportSlots = typeof __propDef.slots;
export default class GoReport extends SvelteComponentTyped<GoReportProps, GoReportEvents, GoReportSlots> {
}
export {};

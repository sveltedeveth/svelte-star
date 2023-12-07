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
export type GoIssueClosedProps = typeof __propDef.props;
export type GoIssueClosedEvents = typeof __propDef.events;
export type GoIssueClosedSlots = typeof __propDef.slots;
export default class GoIssueClosed extends SvelteComponentTyped<GoIssueClosedProps, GoIssueClosedEvents, GoIssueClosedSlots> {
}
export {};

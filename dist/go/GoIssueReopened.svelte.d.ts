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
export type GoIssueReopenedProps = typeof __propDef.props;
export type GoIssueReopenedEvents = typeof __propDef.events;
export type GoIssueReopenedSlots = typeof __propDef.slots;
export default class GoIssueReopened extends SvelteComponentTyped<GoIssueReopenedProps, GoIssueReopenedEvents, GoIssueReopenedSlots> {
}
export {};

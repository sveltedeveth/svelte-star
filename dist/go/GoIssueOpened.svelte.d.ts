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
export type GoIssueOpenedProps = typeof __propDef.props;
export type GoIssueOpenedEvents = typeof __propDef.events;
export type GoIssueOpenedSlots = typeof __propDef.slots;
export default class GoIssueOpened extends SvelteComponentTyped<GoIssueOpenedProps, GoIssueOpenedEvents, GoIssueOpenedSlots> {
}
export {};

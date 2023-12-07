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
export type GoMilestoneProps = typeof __propDef.props;
export type GoMilestoneEvents = typeof __propDef.events;
export type GoMilestoneSlots = typeof __propDef.slots;
export default class GoMilestone extends SvelteComponentTyped<GoMilestoneProps, GoMilestoneEvents, GoMilestoneSlots> {
}
export {};

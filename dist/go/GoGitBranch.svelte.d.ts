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
export type GoGitBranchProps = typeof __propDef.props;
export type GoGitBranchEvents = typeof __propDef.events;
export type GoGitBranchSlots = typeof __propDef.slots;
export default class GoGitBranch extends SvelteComponentTyped<GoGitBranchProps, GoGitBranchEvents, GoGitBranchSlots> {
}
export {};

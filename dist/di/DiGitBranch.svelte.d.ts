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
export type DiGitBranchProps = typeof __propDef.props;
export type DiGitBranchEvents = typeof __propDef.events;
export type DiGitBranchSlots = typeof __propDef.slots;
export default class DiGitBranch extends SvelteComponentTyped<DiGitBranchProps, DiGitBranchEvents, DiGitBranchSlots> {
}
export {};

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
export type IoMdGitBranchProps = typeof __propDef.props;
export type IoMdGitBranchEvents = typeof __propDef.events;
export type IoMdGitBranchSlots = typeof __propDef.slots;
export default class IoMdGitBranch extends SvelteComponentTyped<IoMdGitBranchProps, IoMdGitBranchEvents, IoMdGitBranchSlots> {
}
export {};

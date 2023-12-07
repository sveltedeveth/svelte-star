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
export type DiGitCommitProps = typeof __propDef.props;
export type DiGitCommitEvents = typeof __propDef.events;
export type DiGitCommitSlots = typeof __propDef.slots;
export default class DiGitCommit extends SvelteComponentTyped<DiGitCommitProps, DiGitCommitEvents, DiGitCommitSlots> {
}
export {};

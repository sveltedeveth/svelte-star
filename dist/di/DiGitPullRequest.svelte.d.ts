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
export type DiGitPullRequestProps = typeof __propDef.props;
export type DiGitPullRequestEvents = typeof __propDef.events;
export type DiGitPullRequestSlots = typeof __propDef.slots;
export default class DiGitPullRequest extends SvelteComponentTyped<DiGitPullRequestProps, DiGitPullRequestEvents, DiGitPullRequestSlots> {
}
export {};

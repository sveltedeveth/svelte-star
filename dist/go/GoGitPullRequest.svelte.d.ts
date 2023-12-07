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
export type GoGitPullRequestProps = typeof __propDef.props;
export type GoGitPullRequestEvents = typeof __propDef.events;
export type GoGitPullRequestSlots = typeof __propDef.slots;
export default class GoGitPullRequest extends SvelteComponentTyped<GoGitPullRequestProps, GoGitPullRequestEvents, GoGitPullRequestSlots> {
}
export {};

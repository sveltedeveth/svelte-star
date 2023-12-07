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
export type GoGitCommitProps = typeof __propDef.props;
export type GoGitCommitEvents = typeof __propDef.events;
export type GoGitCommitSlots = typeof __propDef.slots;
export default class GoGitCommit extends SvelteComponentTyped<GoGitCommitProps, GoGitCommitEvents, GoGitCommitSlots> {
}
export {};

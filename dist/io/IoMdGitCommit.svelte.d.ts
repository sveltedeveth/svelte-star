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
export type IoMdGitCommitProps = typeof __propDef.props;
export type IoMdGitCommitEvents = typeof __propDef.events;
export type IoMdGitCommitSlots = typeof __propDef.slots;
export default class IoMdGitCommit extends SvelteComponentTyped<IoMdGitCommitProps, IoMdGitCommitEvents, IoMdGitCommitSlots> {
}
export {};

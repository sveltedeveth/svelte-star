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
export type DiGitMergeProps = typeof __propDef.props;
export type DiGitMergeEvents = typeof __propDef.events;
export type DiGitMergeSlots = typeof __propDef.slots;
export default class DiGitMerge extends SvelteComponentTyped<DiGitMergeProps, DiGitMergeEvents, DiGitMergeSlots> {
}
export {};

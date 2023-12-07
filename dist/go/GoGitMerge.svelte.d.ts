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
export type GoGitMergeProps = typeof __propDef.props;
export type GoGitMergeEvents = typeof __propDef.events;
export type GoGitMergeSlots = typeof __propDef.slots;
export default class GoGitMerge extends SvelteComponentTyped<GoGitMergeProps, GoGitMergeEvents, GoGitMergeSlots> {
}
export {};

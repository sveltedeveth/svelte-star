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
export type DiGitProps = typeof __propDef.props;
export type DiGitEvents = typeof __propDef.events;
export type DiGitSlots = typeof __propDef.slots;
export default class DiGit extends SvelteComponentTyped<DiGitProps, DiGitEvents, DiGitSlots> {
}
export {};

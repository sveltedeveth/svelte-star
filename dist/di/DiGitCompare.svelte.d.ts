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
export type DiGitCompareProps = typeof __propDef.props;
export type DiGitCompareEvents = typeof __propDef.events;
export type DiGitCompareSlots = typeof __propDef.slots;
export default class DiGitCompare extends SvelteComponentTyped<DiGitCompareProps, DiGitCompareEvents, DiGitCompareSlots> {
}
export {};

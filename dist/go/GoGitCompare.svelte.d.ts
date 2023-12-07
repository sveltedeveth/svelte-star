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
export type GoGitCompareProps = typeof __propDef.props;
export type GoGitCompareEvents = typeof __propDef.events;
export type GoGitCompareSlots = typeof __propDef.slots;
export default class GoGitCompare extends SvelteComponentTyped<GoGitCompareProps, GoGitCompareEvents, GoGitCompareSlots> {
}
export {};

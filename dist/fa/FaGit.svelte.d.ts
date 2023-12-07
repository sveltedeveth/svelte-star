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
export type FaGitProps = typeof __propDef.props;
export type FaGitEvents = typeof __propDef.events;
export type FaGitSlots = typeof __propDef.slots;
export default class FaGit extends SvelteComponentTyped<FaGitProps, FaGitEvents, FaGitSlots> {
}
export {};

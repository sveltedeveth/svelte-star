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
export type FaGitlabProps = typeof __propDef.props;
export type FaGitlabEvents = typeof __propDef.events;
export type FaGitlabSlots = typeof __propDef.slots;
export default class FaGitlab extends SvelteComponentTyped<FaGitlabProps, FaGitlabEvents, FaGitlabSlots> {
}
export {};

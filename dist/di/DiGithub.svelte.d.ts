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
export type DiGithubProps = typeof __propDef.props;
export type DiGithubEvents = typeof __propDef.events;
export type DiGithubSlots = typeof __propDef.slots;
export default class DiGithub extends SvelteComponentTyped<DiGithubProps, DiGithubEvents, DiGithubSlots> {
}
export {};

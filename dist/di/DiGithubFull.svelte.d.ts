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
export type DiGithubFullProps = typeof __propDef.props;
export type DiGithubFullEvents = typeof __propDef.events;
export type DiGithubFullSlots = typeof __propDef.slots;
export default class DiGithubFull extends SvelteComponentTyped<DiGithubFullProps, DiGithubFullEvents, DiGithubFullSlots> {
}
export {};

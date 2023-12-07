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
export type DiGithubAltProps = typeof __propDef.props;
export type DiGithubAltEvents = typeof __propDef.events;
export type DiGithubAltSlots = typeof __propDef.slots;
export default class DiGithubAlt extends SvelteComponentTyped<DiGithubAltProps, DiGithubAltEvents, DiGithubAltSlots> {
}
export {};

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
export type DiGithubBadgeProps = typeof __propDef.props;
export type DiGithubBadgeEvents = typeof __propDef.events;
export type DiGithubBadgeSlots = typeof __propDef.slots;
export default class DiGithubBadge extends SvelteComponentTyped<DiGithubBadgeProps, DiGithubBadgeEvents, DiGithubBadgeSlots> {
}
export {};

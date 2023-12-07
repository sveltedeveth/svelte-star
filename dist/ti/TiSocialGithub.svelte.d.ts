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
export type TiSocialGithubProps = typeof __propDef.props;
export type TiSocialGithubEvents = typeof __propDef.events;
export type TiSocialGithubSlots = typeof __propDef.slots;
export default class TiSocialGithub extends SvelteComponentTyped<TiSocialGithubProps, TiSocialGithubEvents, TiSocialGithubSlots> {
}
export {};

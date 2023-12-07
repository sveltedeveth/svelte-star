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
export type GoLogoGithubProps = typeof __propDef.props;
export type GoLogoGithubEvents = typeof __propDef.events;
export type GoLogoGithubSlots = typeof __propDef.slots;
export default class GoLogoGithub extends SvelteComponentTyped<GoLogoGithubProps, GoLogoGithubEvents, GoLogoGithubSlots> {
}
export {};

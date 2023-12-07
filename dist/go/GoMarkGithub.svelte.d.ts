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
export type GoMarkGithubProps = typeof __propDef.props;
export type GoMarkGithubEvents = typeof __propDef.events;
export type GoMarkGithubSlots = typeof __propDef.slots;
export default class GoMarkGithub extends SvelteComponentTyped<GoMarkGithubProps, GoMarkGithubEvents, GoMarkGithubSlots> {
}
export {};

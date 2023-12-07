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
export type GoGithubActionProps = typeof __propDef.props;
export type GoGithubActionEvents = typeof __propDef.events;
export type GoGithubActionSlots = typeof __propDef.slots;
export default class GoGithubAction extends SvelteComponentTyped<GoGithubActionProps, GoGithubActionEvents, GoGithubActionSlots> {
}
export {};

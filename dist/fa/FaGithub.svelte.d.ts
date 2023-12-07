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
export type FaGithubProps = typeof __propDef.props;
export type FaGithubEvents = typeof __propDef.events;
export type FaGithubSlots = typeof __propDef.slots;
export default class FaGithub extends SvelteComponentTyped<FaGithubProps, FaGithubEvents, FaGithubSlots> {
}
export {};

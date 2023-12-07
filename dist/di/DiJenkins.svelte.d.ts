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
export type DiJenkinsProps = typeof __propDef.props;
export type DiJenkinsEvents = typeof __propDef.events;
export type DiJenkinsSlots = typeof __propDef.slots;
export default class DiJenkins extends SvelteComponentTyped<DiJenkinsProps, DiJenkinsEvents, DiJenkinsSlots> {
}
export {};

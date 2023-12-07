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
export type FaJenkinsProps = typeof __propDef.props;
export type FaJenkinsEvents = typeof __propDef.events;
export type FaJenkinsSlots = typeof __propDef.slots;
export default class FaJenkins extends SvelteComponentTyped<FaJenkinsProps, FaJenkinsEvents, FaJenkinsSlots> {
}
export {};

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
export type GoRepoCloneProps = typeof __propDef.props;
export type GoRepoCloneEvents = typeof __propDef.events;
export type GoRepoCloneSlots = typeof __propDef.slots;
export default class GoRepoClone extends SvelteComponentTyped<GoRepoCloneProps, GoRepoCloneEvents, GoRepoCloneSlots> {
}
export {};

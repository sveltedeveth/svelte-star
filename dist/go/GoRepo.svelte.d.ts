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
export type GoRepoProps = typeof __propDef.props;
export type GoRepoEvents = typeof __propDef.events;
export type GoRepoSlots = typeof __propDef.slots;
export default class GoRepo extends SvelteComponentTyped<GoRepoProps, GoRepoEvents, GoRepoSlots> {
}
export {};

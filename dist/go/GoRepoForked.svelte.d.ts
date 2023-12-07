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
export type GoRepoForkedProps = typeof __propDef.props;
export type GoRepoForkedEvents = typeof __propDef.events;
export type GoRepoForkedSlots = typeof __propDef.slots;
export default class GoRepoForked extends SvelteComponentTyped<GoRepoForkedProps, GoRepoForkedEvents, GoRepoForkedSlots> {
}
export {};

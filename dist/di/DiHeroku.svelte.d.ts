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
export type DiHerokuProps = typeof __propDef.props;
export type DiHerokuEvents = typeof __propDef.events;
export type DiHerokuSlots = typeof __propDef.slots;
export default class DiHeroku extends SvelteComponentTyped<DiHerokuProps, DiHerokuEvents, DiHerokuSlots> {
}
export {};

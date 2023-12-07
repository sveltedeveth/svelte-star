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
export type DiHackernewsProps = typeof __propDef.props;
export type DiHackernewsEvents = typeof __propDef.events;
export type DiHackernewsSlots = typeof __propDef.slots;
export default class DiHackernews extends SvelteComponentTyped<DiHackernewsProps, DiHackernewsEvents, DiHackernewsSlots> {
}
export {};

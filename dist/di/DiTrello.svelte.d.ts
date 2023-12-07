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
export type DiTrelloProps = typeof __propDef.props;
export type DiTrelloEvents = typeof __propDef.events;
export type DiTrelloSlots = typeof __propDef.slots;
export default class DiTrello extends SvelteComponentTyped<DiTrelloProps, DiTrelloEvents, DiTrelloSlots> {
}
export {};

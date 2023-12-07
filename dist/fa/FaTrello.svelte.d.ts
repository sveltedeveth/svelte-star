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
export type FaTrelloProps = typeof __propDef.props;
export type FaTrelloEvents = typeof __propDef.events;
export type FaTrelloSlots = typeof __propDef.slots;
export default class FaTrello extends SvelteComponentTyped<FaTrelloProps, FaTrelloEvents, FaTrelloSlots> {
}
export {};

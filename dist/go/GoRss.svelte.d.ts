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
export type GoRssProps = typeof __propDef.props;
export type GoRssEvents = typeof __propDef.events;
export type GoRssSlots = typeof __propDef.slots;
export default class GoRss extends SvelteComponentTyped<GoRssProps, GoRssEvents, GoRssSlots> {
}
export {};

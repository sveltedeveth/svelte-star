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
export type TiThListProps = typeof __propDef.props;
export type TiThListEvents = typeof __propDef.events;
export type TiThListSlots = typeof __propDef.slots;
export default class TiThList extends SvelteComponentTyped<TiThListProps, TiThListEvents, TiThListSlots> {
}
export {};

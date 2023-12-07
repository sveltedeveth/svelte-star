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
export type TiThumbsOkProps = typeof __propDef.props;
export type TiThumbsOkEvents = typeof __propDef.events;
export type TiThumbsOkSlots = typeof __propDef.slots;
export default class TiThumbsOk extends SvelteComponentTyped<TiThumbsOkProps, TiThumbsOkEvents, TiThumbsOkSlots> {
}
export {};

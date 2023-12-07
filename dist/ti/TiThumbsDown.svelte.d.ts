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
export type TiThumbsDownProps = typeof __propDef.props;
export type TiThumbsDownEvents = typeof __propDef.events;
export type TiThumbsDownSlots = typeof __propDef.slots;
export default class TiThumbsDown extends SvelteComponentTyped<TiThumbsDownProps, TiThumbsDownEvents, TiThumbsDownSlots> {
}
export {};
